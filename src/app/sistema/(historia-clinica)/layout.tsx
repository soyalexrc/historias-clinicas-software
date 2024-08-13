import {ReactNode} from "react";
import TransactionsToolbar from "@/components/layout/transactions-toolbar/TransactionsToolbar";
import RealTimePatients from "@/components/patients/RealTimePatients";
import {currentUser} from "@clerk/nextjs/server";

export default async function Layout({ children }: Readonly<{ children: ReactNode }>) {
    const user = await currentUser();
    console.log(user);
    return (
        <div className='h-screen-with-footer overflow-hidden'>
            <TransactionsToolbar />
            <div className='grid grid-cols-11'>
                <div className='col-span-2 p-2 h-full'>
                    {user && <RealTimePatients userService={user?.publicMetadata?.serviceValue as string} />}
                </div>
                <div className='col-span-9'>
                    {children}
                </div>
            </div>
        </div>
    )
}
