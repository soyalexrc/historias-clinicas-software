import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";
import {Cliente2} from "@prisma/client";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const body: Cliente2[] = await req.json();
        const newClient = await prisma.cliente2.create({
            data: {...body[0]}
        })

        console.log('inserted client info', newClient);


        return NextResponse.json({message: 'Se registro el cliente remoto con exito!'})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: JSON.stringify(error)}, {status: 500})
    }
}
