import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";

type IncomingData = {
    C_ID: number,
    C_ID_ITEM: string,
    C_DESCRIP_ITEM: string,
    C_VALOR_VENTA_UNITARIA: number,
    C_CANTIDAD_ITEM: number,
    C_IGV_TOTAL_ITEM: number,
    C_COD_SUNAT_PROD_SERV_ITEM: string,
}

export async function POST(req: NextRequest) {
    try {
        const body: IncomingData[] = await req.json();
        const newTicket = await prisma.ticketInfoDetail.create({
            data: body[0]
        })

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


