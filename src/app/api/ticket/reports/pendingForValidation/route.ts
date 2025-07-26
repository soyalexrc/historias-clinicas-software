import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";

// @ts-ignore
import {TicketInfo, TicketInfoDetail} from "@prisma/client";

interface TicketDetailWithService extends TicketInfoDetail {service?: any}
export interface TicketWithDetails extends TicketInfo {details?: any[]}

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const datefrom = params.get('datefrom');
    const dateTo = params.get('dateTo');
    const nroSerie = params.get('C_NRO_SERIE');
    const nroDoc = params.get('C_NRO_DOC');
    const nroDocAdquiriente = params.get('C_NRO_DOC_ADQUIRIENTE');
    const apamnoRazonSocialAdquiriente = params.get('C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE');
    const service = params.get('service');
    const status = params.get('status');

    const whereClause: any = {};

    if (datefrom && dateTo) {
        // TODO Date is missing hours
        const dt = new Date(dateTo);
        dt.setHours(42);
        whereClause['C_FEC_CREA_FACE'] = {
            gte: new Date(datefrom),
            lte: dt
        }
    }

    if (nroSerie) {
        whereClause['C_NRO_SERIE'] = nroSerie
    }

    if (nroDoc) {
        whereClause['C_NRO_DOC'] = nroDoc
    }

    if (nroDocAdquiriente) {
        whereClause['C_NRO_DOC_ADQUIRIENTE'] = nroDocAdquiriente
    }

    if (service) {
        whereClause['services'] = {
            has: service
        }
    }

    if (apamnoRazonSocialAdquiriente) {
        whereClause['C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE'] = {
            contains: apamnoRazonSocialAdquiriente
        }
    }

    if (status && status !== 'All') {
        if (JSON.parse(status)) {
            whereClause['isValidated'] = true;
        } else {
            whereClause['isValidated'] = {
                not: true
            };
        }
    }

    console.log(whereClause)

    try {
        // @ts-ignore
        const tickets: TicketWithDetails[] = await prisma.ticketInfo.findMany({
            where: whereClause,
        })

        if (tickets.length > 0) {
            // @ts-ignore
            const ticketIds = tickets.map(ticket => ticket.C_ID);
            // @ts-ignore
            const ticketDetails: TicketDetailWithService[] = await prisma.ticketInfoDetail.findMany({
                where: {
                    C_ID: { in: ticketIds }
                }
            });
            // @ts-ignore
            const serviceCodes = ticketDetails.map(detail => detail.C_COD_PROD_SERV_ITEM);

            const services = await prisma.service2.findMany({
                where: {
                    Cd_Srv: { in: serviceCodes }
                },
                select: {
                    Cd_Srv: true,
                    id: true,
                    CA01: true,
                    CA02: true,
                    CodCo: true,
                    Descrip: true,
                    Nombre: true
                }
            });

            const serviceMap = services.reduce((acc: any, service) => {
                acc[service.Cd_Srv] = service;
                return acc;
            }, {});

            const detailsMap = ticketDetails.reduce((acc: any, detail) => {
                // @ts-ignore
                if (!acc[detail.C_ID]) {
                    // @ts-ignore
                    acc[detail.C_ID] = [];
                }
                // @ts-ignore
                detail.service = serviceMap[detail.C_COD_PROD_SERV_ITEM];
                // @ts-ignore
                acc[detail.C_ID].push(detail);
                return acc;
            }, {});

            for (const ticket of tickets) {
                // @ts-ignore
                ticket.details = detailsMap[ticket.C_ID] || [];

                // Process special items
                let totalDeduction = 0;
                // @ts-ignore
                for (const detail of ticket.details) {
                    if (detail.C_DESCRIP_ITEM === "HISTORIA CLINICA" || detail.C_DESCRIP_ITEM === "EMISION") {
                        // Store the original values for deduction
                        totalDeduction += detail.C_TOTAL_ITEM;

                        // Set price and total to 0
                        detail.C_PRECIO_VENTA_UNITARIO_ITEM = 0;
                        detail.C_TOTAL_ITEM = 0;
                    } else if (detail.C_DESCRIP_ITEM === "CERTIFICADO DESCANSO MEDICO") {
                        // Calculate the difference between original and new value (20)
                        const originalTotal = detail.C_TOTAL_ITEM;
                        const newTotal = 20;
                        totalDeduction += (originalTotal - newTotal);

                        // Set price and total to 20
                        detail.C_PRECIO_VENTA_UNITARIO_ITEM = 20;
                        detail.C_TOTAL_ITEM = 20;
                    }
                }

                // Subtract the total deduction from parent ticket totals
                if (totalDeduction > 0) {
                    // @ts-ignore
                    ticket.C_MONTO_TOTAL_IGV = Math.max(0, ticket.C_MONTO_TOTAL_IGV - totalDeduction);
                    // @ts-ignore
                    ticket.C_MONTO_PAGAR = Math.max(0, ticket.C_MONTO_PAGAR - totalDeduction);
                    // @ts-ignore
                    if (ticket.C_TOTAL_OPERACIONES_GRAV !== null) {
                        // @ts-ignore
                        ticket.C_TOTAL_OPERACIONES_GRAV = Math.max(0, ticket.C_TOTAL_OPERACIONES_GRAV - totalDeduction);
                    }
                }
            }
        } else {
            tickets.map(t => ({ ...t, details: [] }))
        }

        return NextResponse.json(tickets);
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: 'Error', desc: err}, {status: 500});
    }
}
