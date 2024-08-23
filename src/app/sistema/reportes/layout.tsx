import {currentUser} from "@clerk/nextjs/server";
import {MainNavigationMenu} from "@/components/layout/MainNavigationMenu";
import MainFooter from "@/components/layout/MainFooter";
import {redirect} from "next/navigation";

export default async function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    const user = await currentUser();

    if (user?.publicMetadata.role !== 'attention' && user?.publicMetadata.role !== 'reporting') {
        redirect('/sistema')
    }

    return (
        <div className='pt-12 min-h-screen'>
            {children}
        </div>
    )
}
