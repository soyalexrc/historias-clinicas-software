import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
import {Service2} from "@prisma/client";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const body: Service2[] = await req.json();
        const newService = await prisma.service2.create({
            data: {...body[0]}
        })

        console.log('inserted client info', newService);


        return NextResponse.json({message: 'Se registro el cliente remoto con exito!'})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: JSON.stringify(error)}, {status: 500})
    }
}
