import {NextRequest, NextResponse} from "next/server";
import PdfPrinter from "pdfmake";
import type {TDocumentDefinitions} from "pdfmake/interfaces";

export async function GET(req: NextRequest, res: Response) {
  try {
      const fonts = {
          Roboto: {
              normal: '/fonts/pdf/Roboto-Regular.ttf',
              bold: '/fonts/pdf/Roboto-Medium.ttf',
              italics: '/fonts/pdf/Roboto-Italic.ttf',
              bolditalics: '/fonts/pdf/Roboto-MediumItalic.ttf'
          }
      }
      const printer = new PdfPrinter(fonts);

      const docDefinition: TDocumentDefinitions = {
          content: [
              'First paragraph',
              'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
          ]
      };

      const pdfDoc = printer.createPdfKitDocument(docDefinition);

      const chunks: Uint8Array[] = [];
      pdfDoc.on('data', chunk => {
          console.log(chunks);
          chunks.push(chunk)
      });
      pdfDoc.on('end', () => {
          const pdfBuffer = Buffer.concat(chunks);
          return new NextResponse(pdfBuffer, {
              headers: {
                  'Content-Type': 'application/pdf',
                  'Content-Disposition': 'attachment; filename="document.pdf"'
              }
          });
      });

      pdfDoc.end();
      // return NextResponse.json('Not implemented');
  } catch (err) {
        console.error(err);
        return NextResponse.json('Internal server error', {status: 500});
  }
}
