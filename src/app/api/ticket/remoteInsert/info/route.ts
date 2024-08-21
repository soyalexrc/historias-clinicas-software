import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
import {formatDateString} from "@/lib/helpers/date";

type IncomingData = {
    C_ID: number,
    C_FEC_ED: string,
    C_TIP_DOC_EMISOR: string,
    C_APAMNO_RAZON_SOCIAL_EMISOR: string,
    C_UBIGEO_EMISOR: string,
    C_DIRECCION_EMISOR: string,
    C_DEPARTAMENTO_EMISOR: string,
    C_PROVINCIA_EMISOR: string,
    C_DISTRITO_EMISOR: string,
    C_NOMBRE_COMERCIAL_EMISOR: string,
    C_TIP_DOC: string,
    C_NRO_SERIE: string,
    C_NRO_DOC: string,
    C_NRO_DOC_ADQUIRIENTE: string,
    C_APAMINO_RAZON_SOCIAL_ADQUIRIENTE: string,
    C_MONEDA: string,
    C_RUCE: string,
    C_TOTAL_OPERACIONES_GRAV: number,
    C_TIP_DOC_ADQUIRIENTE: string,
    C_MONTO_TOTAL_IGV: number,
    C_MONTO_PAGAR: number,
    C_MONTO_TOTAL_PERCEP: number,
    C_LEYENDA: string,
    C_FEC_CREA_FACE: string
}

// export const runtime = 'edge';
// export const dynamic = 'force-dynamic';


export async function POST(req: NextRequest) {
    try {
        const body: IncomingData[] = await req.json();
        const newTicket = await prisma.ticketInfo.create({
            data: {
                ...body[0],
                C_FEC_CREA_FACE: formatDateString(body[0].C_FEC_CREA_FACE),
                isValidated: false,
                C_FEC_ED: formatDateString(body[0].C_FEC_ED)
            }
        })

        return NextResponse.json({message: 'Se registro el ticket remoto con exito!'})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: JSON.stringify(error)})
    }
}

export async function GET(req: NextRequest) {
    try {
        const data = await prisma.ticketInfo.findMany();

        return NextResponse.json(data)
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: JSON.stringify(error)})
    }
}
