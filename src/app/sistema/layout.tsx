import {currentUser} from "@clerk/nextjs/server";
import {MainNavigationMenu} from "@/components/layout/MainNavigationMenu";
import MainFooter from "@/components/layout/MainFooter";

export default async function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    const user = await currentUser();

    return (
        <>
            <MainNavigationMenu role={user?.publicMetadata.role as string ?? 'default'}/>
            {children}
            {user && <MainFooter
                type={user.publicMetadata?.type as string}
                role={user.publicMetadata?.role as string}
                lastName={user.lastName as string}
                firstName={user.firstName as string}
                serviceTitle={user.publicMetadata?.serviceTitle as string}
                username={user.username as string}
            />}
        </>
    );
}
