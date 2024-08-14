import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db/prisma";


export async function POST(req: NextRequest) {
    try {
        throw new Error('Error de prueba');
        // const data = await req.json();
        // const d = await prisma.testTicket.create({
        //     data: {
        //         jsonString: JSON.stringify(data)
        //     }
        // })
        //
        // return NextResponse.json({ message: 'Se registro el ticket remoto con exito!', data })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: JSON.stringify(error) })
    }
}
