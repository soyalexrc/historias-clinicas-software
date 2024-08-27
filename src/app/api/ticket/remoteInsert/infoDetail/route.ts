import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";

type IncomingData = {
    C_ID: number,
    C_ID_ITEM: number,
    C_DESCRIP_ITEM: string,
    C_COD_PROD_SERV_ITEM: string,
    C_INDICADOR_PS_ITEM: string,
    C_PRECIO_VENTA_UNITARIO_ITEM: number,
    C_TOTAL_ITEM: number,
    C_VALOR_ITEM: number,
    C_VALOR_VENTA_UNITARIA: number,
    C_CANTIDAD_ITEM: number,
    C_IGV_TOTAL_ITEM: number,
    C_COD_SUNAT_PROD_SERV_ITEM: string,
    C_COD_COMERCIAL_PROD_SERV: string,
}

export async function POST(req: NextRequest) {
    try {
        const body: IncomingData[] = await req.json();
        const newTicket = await prisma.ticketInfoDetail.create({
            data: body[0]
        })

        console.log('newTicket', newTicket);

        const service = await prisma.service2.findUnique(({
            where: {
                Cd_Srv: newTicket.C_COD_PROD_SERV_ITEM
            }
        }))

        console.log('service', service);


        if (service && service.CA02) {
            console.log('CA02', service.CA02);
            const ticket = await prisma.ticketInfo.findUnique({ where: { C_ID: newTicket.C_ID } });
            console.log('ticket', ticket);
            if (ticket) {
                const services = ticket.services;

                console.log('services 1', services);

                if (!services.includes(service?.CA02)) {
                    services.push(service?.CA02)

                    console.log('services 2', services);
                    await prisma.ticketInfo.update({
                        data: {
                            services
                        },
                        where: {
                            id: ticket.id
                        }
                    })
                }
            }
        }


        return NextResponse.json({message: 'Se registro el ticket remoto con exito!'})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: JSON.stringify(error)})
    }
}

export async function GET(req: NextRequest) {
    try {
        // TODO agregar filtros por query params/body...
        const data = await prisma.ticketInfoDetail.findMany();

        return NextResponse.json(data)
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: JSON.stringify(error)})
    }
}


