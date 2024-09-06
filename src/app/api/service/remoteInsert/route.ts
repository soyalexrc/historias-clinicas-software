import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
import {Service2} from "@prisma/client";

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const MAX_RETRIES = 3; // Adjust the maximum retry attempts as needed
const RETRY_DELAY = 5000; // Retry delay in milliseconds

export async function POST(req: NextRequest) {
    try {
        const body: Service2[] = await req.json();
        console.log('Attempted to insert service', body);

        let retries = 0;

        while (retries < MAX_RETRIES) {
            try {
                const newService = await prisma.service2.create({
                    data: {...body[0]}
                })

                console.log('inserted client info', newService);


                return NextResponse.json({message: 'Se registro el cliente remoto con exito!'})
            } catch (error) {
                console.error(`Retry attempt (service) ${retries + 1} failed:`, error);
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
