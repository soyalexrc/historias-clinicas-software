import {Button} from "@/components/ui/button";
import {PenLine, Printer, ReceiptText, Save, SquareX} from "lucide-react";
import TransactionsForm from "@/components/layout/transactions-toolbar/TransactionsForm";

export default function TransactionsToolbar() {
    return (
        <div className='px-2 mb-2 py-4 flex gap-4 border-b-2'>
            <div className='grid grid-cols-2 gap-2'>
                {/*<Button className='bg-gray-100 text-black hover:text-white p-8'>*/}
                {/*    <div className='flex flex-col items-center '>*/}
                {/*        <ReceiptText/>*/}
                {/*        Recibo*/}
                {/*    </div>*/}
                {/*</Button>*/}
                <Button className='bg-gray-100 text-black hover:text-white px-8 h-full'>
                    <div className='flex flex-col items-center '>
                        <Save/>
                        Guardar
                    </div>
                </Button>
                <Button className='bg-gray-100 text-black hover:text-white px-8 h-full'>
                    <div className='flex flex-col items-center '>
                        <Printer/>
                        Imprimir
                    </div>
                </Button>
                <Button className='bg-gray-100 text-black hover:text-white px-8 h-full'>
                    <div className='flex flex-col items-center '>
                        <SquareX/>
                        Cancelar
                    </div>
                </Button>
                <Button disabled className='bg-gray-100 text-black hover:text-white px-8 h-full'>
                    <div className='flex flex-col items-center '>
                        <PenLine/>
                        Firmar
                    </div>
                </Button>
            </div>
            <TransactionsForm />
        </div>
    )
}
