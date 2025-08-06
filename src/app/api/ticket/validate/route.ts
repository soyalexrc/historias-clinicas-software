import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/db/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { ticketsIds, valitadedBy, dateString } = body;

        if (!ticketsIds || !Array.isArray(ticketsIds) || ticketsIds.length === 0) {
            return NextResponse.json(
                { success: false, message: 'IDs de tickets inválidos' },
                { status: 400 }
            );
        }

        if (!valitadedBy || !dateString) {
            return NextResponse.json(
                { success: false, message: 'Datos de validación incompletos' },
                { status: 400 }
            );
        }

        await prisma.ticketInfo.updateMany({
            where: {
                id: { in: ticketsIds }
            },
            data: {
                isValidated: true,
                validatedDate: dateString,
                valitadedBy
            }
        });

        return NextResponse.json({ 
            success: true, 
            message: 'Tickets validados correctamente' 
        });

    } catch (error) {
        console.error('Error validating tickets:', error);
        return NextResponse.json(
            { success: false, message: 'Error al validar los tickets' },
            { status: 500 }
        );
    }
}