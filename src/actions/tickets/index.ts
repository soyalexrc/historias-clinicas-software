'use server';
import prisma from "@/lib/db/prisma";

export async function validateTicketsAction(ticketsIds: number[], valitadedBy: string) {

    const validatedDate = new Date().toISOString();

    try {
        await prisma.ticketInfo.updateMany({
            where: {
                id: { in: ticketsIds }
            },
            data: {
                isValidated: true,
                validatedDate,
                valitadedBy
            }
        })

        return { success: true, message: 'Tickets validados correctamente' }
    } catch (err) {
        console.log(err);
        return { success: false, message: 'Error al validar los tickets' }
    }
}
