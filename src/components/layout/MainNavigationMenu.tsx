"use client"

import * as React from "react"
import {LogOut} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useAuth, useClerk} from "@clerk/nextjs";
import {useAppDispatch} from "@/lib/store/hooks";
import {kickOut} from "@/lib/store/features/auth/state/authSlice";

export function MainNavigationMenu() {
    const router = useRouter();
    const {signOut, user} = useClerk();
    const dispatch = useAppDispatch();

    async function handleSignOut() {
        dispatch(kickOut())
        await signOut({
            redirectUrl: '/ingreso'
        })
    }

    function getRole(): string {
        return user?.publicMetadata.role as string
    }

    return (
        <header>
            <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                {
                    getRole() === 'attention' &&
                    <>
                        <Button variant='ghost' onClick={() => router.push('/sistema/atencion')}>Historia clinica</Button>
                        <Button variant='ghost' onClick={() => router.push('/sistema/atencion/reportes')}>Reportes</Button>
                    </>
                }

                {
                    getRole() === 'admin' &&
                    <></>
                }

                {
                    getRole() === 'reporting' &&
                    <>
                        <Button variant='ghost' onClick={() => router.push('/sistema/reportes')}>Reportes</Button>
                        <Button variant='ghost' onClick={() => router.push('/sistema/reportes/validacion-tickets')}>Validacion de tickets</Button>
                    </>
                }
                <Button variant='ghost' onClick={() => router.push('/sistema/configuracion')}>Configuracion</Button>
                <span className="m-auto"></span>
                <Button variant='ghost' className='gap-2' onClick={handleSignOut}>
                    <LogOut />
                    Salir del sistema
                </Button>
            </nav>
        </header>
    )
}
