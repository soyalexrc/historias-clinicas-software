import pdfMake, {tableLayouts} from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import printjs from 'print-js';
import {type CustomTableLayout, TDocumentDefinitions} from "pdfmake/interfaces";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const customTableLayouts: Record<string, CustomTableLayout> = {
    customLayout01: {
        hLineWidth: (i, node) => {
            if (i === 0 || i === node.table.body.length) {
                return 0
            }
            return i === node.table.headerRows ? 2 : 1
        },
        vLineWidth: (i) => {
            return 0
        },
        hLineColor: (i) => {
            return i === 1 ? 'black' : '#bbbbbb'
        },
        paddingLeft: (i) => {
            return i === 0 ? 0 : 8
        },
        paddingRight: (i, node) => {
            return i === node.table.widths!.length - 1 ? 0 : 8
        },
        fillColor: (i, node) => {
            if (i === 0) {
                return '#7b90be'
            }

            if (i === node.table.body.length - 1) {
                return '#7b90be'
            }

            return i % 2 === 0 ? '#f3f3f3' : null
        }
    }
}

const createPdf = async (props: any, output = 'print') => {
    return new Promise((resolve, reject) => {
        try {
            const {
                content,
            } = props;

            const docDefinition: TDocumentDefinitions = {
                pageOrientation: 'landscape',
                language: 'es-PE',
                info: {
                  creator: 'Solumina Tech',
                  author: 'Solumina Tech',
                  creationDate: new Date(),
                  title: 'Reporte de tickets',
                },

                footer: (currentPage: number, pageCount: number) => {
                    return {
                        text: `Página ${currentPage} de ${pageCount}`,
                        alignment: 'center',
                        fontSize: 10
                    };
                },
                pageMargins: [40, 100, 40, 60],
                content, // CONTENIDO PDF
            };

            if (output === 'b64') {
                //SI INDICAMOS QUE LA SALIDA SERA [b64] Base64
                const pdfMakeCreatePdf = pdfMake.createPdf(docDefinition);
                pdfMakeCreatePdf.getBase64((data) => {
                    resolve({
                        success: true,
                        content: data,
                        message: 'Archivo generado correctamente.',
                    });
                });
                return;
            }

            //ENVIAR A IMPRESIÓN DIRECTA
            if (output === 'print') {
                const pdfMakeCreatePdf = pdfMake.createPdf(
                    docDefinition,
                    customTableLayouts
                );
                // pdfMakeCreatePdf.print();
                pdfMakeCreatePdf.getBase64((data) => {
                    printjs({
                        printable: data,
                        type: 'pdf',
                        base64: true,
                    });
                    resolve({
                        success: true,
                        content: null,
                        message: 'Documento enviado a impresión.',
                    });
                });
                return;
            }

            reject({
                success: false,
                content: null,
                message: 'Debes enviar tipo salida.',
            });
        } catch (error: any) {
            reject({
                success: false,
                content: null,
                message: error?.message ?? 'No se pudo generar proceso.',
            });
        }
    });
};

export default createPdf;
