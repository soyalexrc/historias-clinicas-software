import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
import {formatDateString} from "@/lib/helpers/date";
import {addDoc, collection} from "@firebase/firestore";
import db from "@/lib/firebase/firestore";

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
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: string,
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


// export const maxDuration = 25;
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const MAX_RETRIES = 3; // Adjust the maximum retry attempts as needed
const RETRY_DELAY = 5000; // Retry delay in milliseconds

export async function POST(req: NextRequest) {
    try {
        const body: IncomingData[] = await req.json();
        console.log('incomingData', body)
        let retries = 0;

        while (retries < MAX_RETRIES) {
            try {
                const newTicket = await prisma.ticketInfo.create({
                    data: {
                        C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: body[0].C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE,
                        C_RUCE: body[0].C_RUCE,
                        C_TIP_DOC: body[0].C_TIP_DOC,
                        C_NRO_DOC: body[0].C_NRO_DOC,
                        C_NRO_SERIE: body[0].C_NRO_SERIE,
                        C_MONEDA: body[0].C_MONEDA,
                        C_TOTAL_OPERACIONES_GRAV: body[0].C_TOTAL_OPERACIONES_GRAV,
                        C_MONTO_TOTAL_IGV: body[0].C_MONTO_TOTAL_IGV,
                        C_MONTO_PAGAR: body[0].C_MONTO_PAGAR,
                        C_MONTO_TOTAL_PERCEP: body[0].C_MONTO_TOTAL_PERCEP,
                        C_LEYENDA: body[0].C_LEYENDA,
                        C_APAMNO_RAZON_SOCIAL_EMISOR: body[0].C_APAMNO_RAZON_SOCIAL_EMISOR,
                        C_FEC_CREA_FACE: formatDateString(body[0].C_FEC_CREA_FACE),
                        C_DEPARTAMENTO_EMISOR: body[0].C_DEPARTAMENTO_EMISOR,
                        C_DIRECCION_EMISOR: body[0].C_DIRECCION_EMISOR,
                        C_DISTRITO_EMISOR: body[0].C_DISTRITO_EMISOR,
                        C_ID: body[0].C_ID,
                        C_NRO_DOC_ADQUIRIENTE: body[0].C_NRO_DOC_ADQUIRIENTE,
                        C_PROVINCIA_EMISOR: body[0].C_PROVINCIA_EMISOR,
                        C_TIP_DOC_ADQUIRIENTE: body[0].C_TIP_DOC_ADQUIRIENTE,
                        C_TIP_DOC_EMISOR: body[0].C_TIP_DOC_EMISOR,
                        C_UBIGEO_EMISOR: body[0].C_UBIGEO_EMISOR,
                        C_NOMBRE_COMERCIAL_EMISOR: body[0].C_NOMBRE_COMERCIAL_EMISOR,
                        isValidated: false,
                        C_FEC_ED: formatDateString(body[0].C_FEC_ED),
                        services: {
                            set: []
                        }
                    }
                })
                console.log(`inserted ticket info on retry attempt ${retries + 1}`, newTicket);

                const collectionRef = collection(db, 'traumatologia')
                const documentData = {
                    name: body[0].C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE,
                    service: 'Traumatologia',
                    dni: body[0].C_NRO_DOC_ADQUIRIENTE,
                    attend: false,
                    datetime: new Date(),
                }
                const newDocRef = await addDoc(collectionRef, documentData)
                console.log(`dispatched ticket into firebase on retry attempt ${retries + 1}`, newDocRef);

                return NextResponse.json({message: 'Se registro el ticket remoto con exito!'})
            } catch (error) {
                console.warn(`Retry attempt (info) ${retries + 1} failed:`, error);
                retries++;

                if (retries < MAX_RETRIES) {
                    await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
                } else {
                    throw error; // Re-throw the error after exhausting retries
                }
            }
        }


    } catch (error) {
        console.error(error);
        return NextResponse.json({error: JSON.stringify(error)}, {status: 500})
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
