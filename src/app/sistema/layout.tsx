import {MainNavigationMenu} from "@/components/layout/MainNavigationMenu";
import MainFooter from "@/components/layout/MainFooter";

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {    return (
        <div>
            <MainNavigationMenu />
            <div className='pt-12 min-h-screen'>
                {children}
            </div>
            <MainFooter />
        </div>
    )
}
