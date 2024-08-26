
import createPdf from './createPdf2';
import type {Content, CustomTableLayout} from "pdfmake/interfaces";
import {TicketWithDetails} from "@/app/api/ticket/reports/pendingForValidation/route";
import {formatDateForTable} from "@/lib/helpers/date";


const generateReportTable = async (output: string, tickets: TicketWithDetails[]) => {
    const data: string[][] =  tickets.map(ticket => [
        { text: `${ticket.C_NRO_SERIE} - ${ticket.C_NRO_DOC}`, bold: true },
        ticket.C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE,
        ticket.C_NRO_DOC_ADQUIRIENTE,
        formatDateForTable(ticket.C_FEC_CREA_FACE),
        ticket.services.map(service => service).join(', '),
        { text: `S/ ${ticket.C_MONTO_PAGAR}`, bold: true },
    ] as string[]);

    function getTotalAmount() {
        let total = 0;
        tickets.map(ticket => {
            total += ticket.C_MONTO_PAGAR;
        });
        return total;
    }

    const content: Content = [
        {
            layout: 'customLayout01',
            table: {
                headerRows: 1,
                widths: [ 100, '*', 70, 'auto', 'auto', 60 ],
                body: [
                    [
                        {text: 'Nro Ticket', bold: true},
                        {text: 'Nombre', bold: true},
                        {text: 'Nro DNI', bold: true},
                        {text: 'Fecha', bold: true},
                        {text: 'Servicio', bold: true},
                        {text: 'Monto', bold: true},
                    ],
                    ...data,
                    [ '', '', '', '', 'Total', 'S/ ' + getTotalAmount() ],
                    // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
                ]
            }
        },

    //     tabla de totales suma de monto_pagar
        {
            text: 'Totales',
            style: {
                fontSize: 18,
                bold: true,
                margin: [0, 40, 0, 0]
            },
        },
        {
            layout: 'noBorders',
            table: {
                widths: [ 100, '*', 70, 'auto', 'auto', 60 ],
                headerRows: 1,
                body: [
                    [
                        {
                            text: 'Monto total',
                            bold: true,
                        },
                        { text: 'S/ ' + getTotalAmount(), bold: true},
                        {},
                        {},
                        {},
                        {},
                    ],
                    [
                        {
                            text: 'Cta. de tickets',
                            bold: true,
                        },
                        { text: tickets.length + ' tickets', bold: true},
                        {},
                        {},
                        {},
                        {},
                    ],
                ]
            }
        }
    ];

    const response = await createPdf({ content }, output);
    return response;
};

export default generateReportTable;
