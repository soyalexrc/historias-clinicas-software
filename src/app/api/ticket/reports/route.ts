import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
import {TicketInfo, TicketInfoDetail} from "@prisma/client";

interface TicketDetailWithService extends TicketInfoDetail {service?: any}
export interface TicketWithDetails extends TicketInfo {details?: any[]}

// export const maxDuration = 25;
export const dynamic = 'force-dynamic';

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
    let orderByClause: any = {};

    if (datefrom && dateTo) {
        // TODO Date is missing hours
        const dt = new Date(dateTo);
        dt.setHours(42);
        if (status && status !== 'All' && JSON.parse(status) === true) {
            whereClause['validateDate'] = {
                gte: new Date(datefrom),
                lte: dt
            }
        } else {
            whereClause['C_FEC_CREA_FACE'] = {
                gte: new Date(datefrom),
                lte: dt
            }
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
            orderByClause = {
                validatedDate: 'asc'
            }
        } else {
            whereClause['isValidated'] = {
                not: true
            };
            orderByClause = {
                C_FEC_CREA_FACE: 'asc'
            }
        }
    }

    console.log(whereClause)

    try {
        const tickets: TicketWithDetails[] = await prisma.ticketInfo.findMany({
            where: whereClause,
            orderBy: orderByClause
        })

        if (tickets.length > 0) {
            const ticketIds = tickets.map(ticket => ticket.C_ID);

            const ticketDetails: TicketDetailWithService[] = await prisma.ticketInfoDetail.findMany({
                where: {
                    C_ID: { in: ticketIds }
                }
            });

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
                if (!acc[detail.C_ID]) {
                    acc[detail.C_ID] = [];
                }
                detail.service = serviceMap[detail.C_COD_PROD_SERV_ITEM];
                acc[detail.C_ID].push(detail);
                return acc;
            }, {});

            for (const ticket of tickets) {
                ticket.details = detailsMap[ticket.C_ID] || [];
            }
        } else {
            tickets.map(t => ({ ...t, details: [] }))
        }

        return NextResponse.json(tickets);
    } catch (err) {
        console.error(err)
        return NextResponse.json({error: 'Error', desc: err}, {status: 500});
    }
}
