
import createPdf from './createPdf2';
import type {Content} from "pdfmake/interfaces";
import {TicketWithDetails} from "@/app/api/ticket/reports/route";
import {formatDateForTable, formatDateForTableWithoutTime, getShiftType} from "@/lib/helpers/date";
import * as XLSX from "xlsx";
import {formatPEN} from "@/lib/helpers/number";


export const generateReportTable = async (output: string, tickets: TicketWithDetails[]) => {
    const data: string[][] =  tickets.map(ticket => [
        { text: `${ticket.C_NRO_SERIE} - ${ticket.C_NRO_DOC}`, bold: true, fontSize: 9, alignment: 'center' },
        { text: ticket.C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE, fontSize: 9 },
        { text: ticket.C_NRO_DOC_ADQUIRIENTE, fontSize: 9, alignment: 'center' },
        { text: formatDateForTableWithoutTime(ticket.C_FEC_CREA_FACE, '-'), fontSize: 9, alignment: 'center' },
        { text: getShiftType(ticket.C_FEC_CREA_FACE), fontSize: 9, alignment: 'center' },
        { text: ticket.services.map(service => `• ${service}`).join('\n'), fontSize: 9 },
        { text: ticket.details ? ticket.details.map((detail: any) => `• ${detail.C_CANTIDAD_ITEM} x ${detail.C_DESCRIP_ITEM}: S/. ${detail.C_TOTAL_ITEM}`).join('\n') : '', fontSize: 8 },
        { text: `S/ ${ticket.C_MONTO_PAGAR}`, bold: true, fontSize: 9, alignment: 'center' },
    ] as any);

    function getTotalAmount(): string {
        let total = 0;
        tickets.map(ticket => {
            total += ticket.C_MONTO_PAGAR;
        });
        return formatPEN(total);
    }

    const content: Content = [
        {
            layout: 'customLayout01',
            table: {
                headerRows: 1,
                widths: [ 78, '*', 57, 46, 32, 90, 180, 76 ],
                body: [
                    [
                        {text: 'Ticket', bold: true},
                        {text: 'Paciente', bold: true},
                        {text: 'Nro Doc', bold: true},
                        {text: 'Fecha', bold: true},
                        {text: 'Turno', bold: true},
                        {text: 'Servicio/s', bold: true},
                        {text: 'Concepto/s', bold: true},
                        {text: 'Monto', bold: true},
                    ],
                    ...data,
                    [ '', '', '', '', '', '', 'Total Monto', {text: getTotalAmount(), bold: true, alignment: 'center'} ],
                    [ '', '', '', '', '', '', 'Total Atenciones', {text: tickets.length, bold: true, alignment: 'center'} ],
                    // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
                ]
            }
        },

    //     tabla de totales suma de monto_pagar
    //     {
    //         text: 'Totales',
    //         style: {
    //             fontSize: 18,
    //             bold: true,
    //             margin: [0, 40, 0, 0]
    //         },
    //     },
    //     {
    //         layout: 'noBorders',
    //         table: {
    //             widths: [ 78, '*', 57, 46, 32, 90, 180, 76 ],
    //             headerRows: 1,
    //             body: [
    //                 [
    //                     {
    //                         text: 'Monto total',
    //                         bold: true,
    //                     },
    //                     { text: getTotalAmount(), bold: true, fontSize: 16},
    //                     {},
    //                     {},
    //                     {},
    //                     {},
    //                     {},
    //                     {},
    //                 ],
    //                 [
    //                     {
    //                         text: 'Cta. de tickets',
    //                         bold: true,
    //                     },
    //                     { text: tickets.length + ' tickets', bold: true},
    //                     {},
    //                     {},
    //                     {},
    //                     {},
    //                     {},
    //                     {},
    //                 ],
    //             ]
    //         }
    //     }
    ];

    const response = await createPdf({ content }, output);
    return response;
};

export const generateReportXLSX = (tickets: TicketWithDetails[]) => {
    const dataToExport = tickets.map(ticket => ({
        'Ticket': `${ticket.C_NRO_SERIE} - ${ticket.C_NRO_DOC}`,
        'Paciente': ticket.C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE,
        'Nro Doc': ticket.C_NRO_DOC_ADQUIRIENTE,
        'Fecha': formatDateForTable(ticket.C_FEC_CREA_FACE, '-'),
        'Servicio': ticket.services.map(service => service).join(', '),
        'Monto': ticket.C_MONTO_PAGAR,
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils?.json_to_sheet(dataToExport);

    worksheet['!cols'] = [
        { wpx: 100 }, // 'Nro Ticket' column width in pixels
        { wpx: 300 }, // 'Nombre' column width in pixels
        { wpx: 70 }, // 'Nro DNI' column width in pixels
        { wpx: 120 }, // 'Fecha' column width in pixels
        { wpx: 300 }, // 'Servicio' column width in pixels
        { wpx: 50 }  // 'Monto' column width in pixels
    ];


    XLSX.utils.book_append_sheet(workbook, worksheet, `Reporte de tickets`);
    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, `Reporte de tickets - ${formatDateForTable(new Date().toISOString())}.xlsx`);
    console.log('exportedData');
}

