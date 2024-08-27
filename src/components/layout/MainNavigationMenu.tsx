import * as React from "react"
import {LogOut} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {SignOutButton} from '@clerk/nextjs';
import {currentUser, User} from "@clerk/nextjs/server";
import Link from "next/link";

type Props = {
    user: User | null
}

export async function MainNavigationMenu({user}: Props) {

    function getRole(): string {
        if (user) {
            return user.publicMetadata.role as string;
        } else {
            return 'default'
        }
    }

    if (getRole() === 'attention') {
        return (
            <header>
                <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                    <Link href="/sistema/atencion">
                        <Button variant='ghost'>Historia clinica</Button>
                    </Link>
                    <Link href="/sistema/atencion/reportes">
                        <Button variant='ghost'>Reportes</Button>
                    </Link>
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
                </nav>
            </header>
        )
    }

    if (getRole() === 'admin') {
        return (
            <header>
                <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                    <Link href="/sistema/atencion/reportes">
                        <Button variant='link'>Reportes</Button>
                    </Link>
                    <Link href="/sistema/atencion/reportes">
                        <Button variant='link'>Gestion de usuarios</Button>
                    </Link>
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
                </nav>
            </header>
        )
    }

    if (getRole() === 'reporting') {
        return (
            <header>
                <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                    <Link href="/sistema/reportes">
                        <Button variant='ghost'>Reportes</Button>
                    </Link>
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
                </nav>
            </header>
        )
    }

    return (
        <header>
            <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                <span className="m-auto"></span>
                <SignOutButton redirectUrl='/ingreso'>
                    <Button variant='ghost' className='gap-2'>
                        <LogOut/>
                        Salir del sistema
                    </Button>
                </SignOutButton>
            </nav>
        </header>
    )
}
