import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import printjs from 'print-js';
import {TDocumentDefinitions} from "pdfmake/interfaces";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const createPdf = async (props: any, output = 'print') => {
    return new Promise((resolve, reject) => {
        try {
            const {
                content,
            } = props;

            const docDefinition: TDocumentDefinitions = {
                pageOrientation: 'landscape',
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
                const pdfMakeCreatePdf = pdfMake.createPdf(docDefinition);
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
