'use client';

import {LogOut} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {SignOutButton} from '@clerk/nextjs';
import Link from "next/link";

type Props = {
    role: string
}

export function MainNavigationMenu({role}: Props) {
    return (
        <header>
            <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                {role !== 'default' && ( // Render buttons only for logged-in users
                    <>
                        {role === 'attention' && ( // Render additional buttons for the "attention" role
                            <>
                                <Link href="/sistema/atencion">
                                    <Button variant='ghost'>Historia clinica</Button>
                                </Link>
                                <Link href="/sistema/atencion/reportes">
                                    <Button variant='ghost'>Reportes</Button>
                                </Link>

                            </>
                        )}
                        {role === 'admin' && ( // Render buttons for the "admin" role
                            <>
                                <Link href="/sistema/atencion/reportes">
                                    <Button variant='link'>Reportes</Button>
                                </Link>
                                <Link href="/sistema/atencion/reportes">
                                    <Button variant='link'>Gestion de usuarios</Button>
                                </Link>

                            </>
                        )}
                        {role === 'reporting' && ( // Render buttons for the "admin" role
                            <>
                                <Link href="/sistema/reportes">
                                    <Button variant='ghost'>Reportes</Button>
                                </Link>

                            </>
                        )}
                    </>
                )}
                <Link href="/sistema/configuracion">
                    <Button variant='ghost'>Configuracion</Button>
                </Link>
                <span className="m-auto"></span>

                <SignOutButton redirectUrl='/ingreso'>
                    <Button variant='ghost' className='gap-2'>
                        <LogOut/>
                        Salir del sistema
                    </Button>
                </SignOutButton>

                {role === 'default' && ( // Render a placeholder button for initial server render
                    <Button variant='ghost' disabled className='opacity-50'>
                        Cargando...
                    </Button>
                )}
            </nav>
        </header>
    )
}
