import {ReactNode} from "react";
import TransactionsToolbar from "@/components/layout/TransactionsToolbar";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div>
            <TransactionsToolbar />
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                    <p>pacientes en tiempo real</p>
                </div>
                <div className='col-span-9'>
                    {children}
                </div>
            </div>
        </div>
    )
}
