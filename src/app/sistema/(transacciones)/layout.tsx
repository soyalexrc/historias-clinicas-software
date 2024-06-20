import {ReactNode} from "react";
import TransactionsToolbar from "@/components/layout/transactions-toolbar/TransactionsToolbar";
import RealTimePatients from "@/components/layout/RealTimePatients";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className='h-screen-with-footer overflow-hidden'>
            <TransactionsToolbar />
            <div className='grid grid-cols-11'>
                <div className='col-span-2 p-2 h-full'>
                    <RealTimePatients />
                </div>
                <div className='col-span-9'>
                    {children}
                </div>
            </div>
        </div>
    )
}
