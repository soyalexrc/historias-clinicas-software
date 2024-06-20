"use client"

import * as React from "react"
import {LogOut} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useClerk} from "@clerk/nextjs";
import {useAppDispatch} from "@/lib/store/hooks";
import {updateUserInfo} from "@/lib/store/features/auth/state/authSlice";

export function MainNavigationMenu() {
    const router = useRouter();
    const {signOut} = useClerk()
    const dispatch = useAppDispatch();

    async function handleSignOut() {
        dispatch(updateUserInfo({}))
        await signOut({
            redirectUrl: '/ingreso'
        })
    }

    return (
        <header>
            <nav className='flex items-center fixed border-b-2 bg-white w-full z-10'>
                <Button variant='ghost' onClick={() => router.push('/sistema')}>Historia clinica</Button>
                <Button variant='ghost' onClick={() => router.push('/sistema/triaje')}>Triaje</Button>
                <Button variant='ghost' onClick={() => router.push('/sistema/reportes')}>Reportes</Button>
                <Button variant='ghost' onClick={() => router.push('/sistema/configuracion')}>Configuracion</Button>
                <Button variant='ghost' className='gap-2' onClick={handleSignOut}>
                    <LogOut />
                    Salir del sistema
                </Button>
            </nav>
        </header>
    )
}
