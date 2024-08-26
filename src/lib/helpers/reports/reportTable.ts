
import createPdf from './createPdf2';
import type {Content} from "pdfmake/interfaces";

const generateReportTable = async (output: string) => {
    const content: Content = [
        {
            layout: 'lightHorizontalLines',
            table: {
                headerRows: 1,
                widths: [ '*', 'auto', 100, '*' ],
                body: [
                    [ 'First', 'Second', 'Third', 'The last one' ],
                    [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                    [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
                ]
            }
        }
    ];

    const response = await createPdf({ content }, output);
    return response;
};

export default generateReportTable;
