import {MainNavigationMenu} from "@/components/layout/MainNavigationMenu";
import MainFooter from "@/components/layout/MainFooter";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default async function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    const user = await currentUser();

    if (user?.publicMetadata.role !== 'attention') {
        redirect('/');
    }

    return (
        <div>
            <MainNavigationMenu/>
            <div className='pt-12 min-h-screen'>
                {children}
            </div>
            {user && <MainFooter
                type={user.publicMetadata?.type as string}
                role={user.publicMetadata?.role}
                lastName={user.lastName as string}
                firstName={user.firstName as string}
                serviceTitle={user.publicMetadata?.serviceTitle as string}
                username={user.username as string}
            />}
        </div>
    )
}
