import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
// @ts-ignore
import {Cliente2} from "@prisma/client";
import {formatDateString} from "@/lib/helpers/date";

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const MAX_RETRIES = 3; // Adjust the maximum retry attempts as needed
const RETRY_DELAY = 5000; // Retry delay in milliseconds

export async function POST(req: NextRequest) {
    try {
        const body: Cliente2[] = await req.json();
        console.log('Attempted to insert client', body);

        let retries = 0

        while (retries < MAX_RETRIES) {
            try {
                const newClient = await prisma.cliente2.create({
                    data: {
                        ...body[0],
                        FecReg: formatDateString(body[0].FecReg as any ?? new Date().toISOString()),
                        FecMdf: formatDateString(body[0].FecMdf as any ?? new Date().toISOString()),
                        C_FECHA_INGRESO: formatDateString(new Date(body[0].C_FECHA_INGRESO ?? new Date()).toISOString() as any ?? new Date().toISOString()),
                        IB_BuenContrib: Number(body[0].IB_BuenContrib) as any,
                        Estado: Number(body[0].Estado) as any,
                        IB_AgRet: Number(body[0].IB_AgRet) as any,
                        IB_AgPercep: Number(body[0].IB_AgPercep) as any,
                        EsExtranjero: Number(body[0].EsExtranjero) as any,
                        IB_ConsumidorFinal: Number(body[0].IB_ConsumidorFinal) as any,
                        C_IB_PAGO_DESTINO: Number(body[0].C_IB_PAGO_DESTINO) as any,
                        C_IB_AGENTE: Number(body[0].C_IB_AGENTE) as any,
                        DefinirDiasCredito: Number(body[0].DefinirDiasCredito) as any,
                    }
                })

                console.log(`inserted client info on retry attempt ${retries + 1}`, newClient)

                return NextResponse.json({message: 'Se registro el cliente remoto con exito!'})
            } catch (error) {
                console.warn(`Retry attempt (clients) ${retries + 1} failed:`, error);
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
