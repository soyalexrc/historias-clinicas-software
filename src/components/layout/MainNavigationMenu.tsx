import * as React from "react"
import {LogOut} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {SignOutButton} from '@clerk/nextjs';
import {currentUser} from "@clerk/nextjs/server";
import Link from "next/link";

export async function MainNavigationMenu() {
    const user = await currentUser()
    // const dispatch = useAppDispatch();

    function getRole(): string {
        return user?.publicMetadata.role as string
    }

    return (
        <header>
            <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                {
                    getRole() === 'attention' &&
                    <>
                        <Link href="/sistema/atencion">
                            <Button variant='ghost'>Historia clinica</Button>
                        </Link>
                        <Link href="/sistema/atencion/reportes">
                            <Button variant='ghost'>Reportes</Button>
                        </Link>
                    </>
                }

                {
                    getRole() === 'admin' &&
                    <></>
                }

                {
                    getRole() === 'reporting' &&
                    <>
                        <Link href="/sistema/reportes">
                            <Button variant='ghost'>Reportes</Button>
                        </Link>
                        {/*<Button variant='ghost' onClick={() => router.push('/sistema/reportes/validacion-tickets')}>Validacion de tickets</Button>*/}
                    </>
                }
                <Link href="/sistema/configuracion">
                    <Button variant='ghost'>Configuracion</Button>
                </Link>
                <span className="m-auto"></span>
                <SignOutButton redirectUrl='/ingreso'>
                    <Button variant='ghost' className='gap-2' >
                        <LogOut />
                        Salir del sistema
                    </Button>
                </SignOutButton>

            </nav>
        </header>
    )
}
