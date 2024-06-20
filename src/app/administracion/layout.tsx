import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {MainNavigationMenu} from "@/components/layout/MainNavigationMenu";

export default async function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    const user = await currentUser();

    if (user?.publicMetadata.role !== 'admin') {
        redirect('/');
    }

    return (
        <div>
            <MainNavigationMenu/>
            <div className='pt-12 min-h-screen'>
                {children}
            </div>
        </div>
    )
}
