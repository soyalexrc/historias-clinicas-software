import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
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
                        FecReg: formatDateString(body[0].FecReg?.toISOString() ?? new Date().toISOString()),
                        FecMdf: formatDateString(body[0].FecMdf?.toISOString() ?? new Date().toISOString()),
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
