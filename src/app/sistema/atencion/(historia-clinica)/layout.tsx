import {ReactNode} from "react";
import TransactionsToolbar from "@/components/layout/transactions-toolbar/TransactionsToolbar";
import RealTimePatients from "@/components/patients/RealTimePatients";
import {currentUser} from "@clerk/nextjs/server";

export default async function Layout({ children }: Readonly<{ children: ReactNode }>) {
    const user = await currentUser();
    return (
        <div className='h-screen-with-footer overflow-hidden'>
            <TransactionsToolbar />
            <div className='flex'>
                <div className='p-2 h-full w-[280px]'>
                    {user && <RealTimePatients userService={user?.publicMetadata?.serviceValue as string} />}
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </div>
    )
}
