"use client"

import * as React from "react"
import {LogOut} from 'lucide-react';

import {cn} from "@/lib/utils"
import {
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export function MainNavigationMenu() {
    const router = useRouter();
    return (
        <header>
            <nav className='flex items-center fixed border-b-2 w-full'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost'>Transacciones</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56'>
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => router.push('/sistema')}>
                                Historia Clinica
                                <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push('/sistema/triaje')}>
                                Triaje
                                <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant='ghost' onClick={() => router.push('/sistema/reportes')}>Reportes</Button>
                <Button variant='ghost' onClick={() => router.push('/sistema/configuracion')}>Configuracion</Button>
                <Button variant='ghost' className='gap-2'>
                    <LogOut />
                    Salir del sistema
                </Button>
            </nav>
        </header>
        // <NavigationMenu className='fixed'>
        //     <NavigationMenuList className='border-b-2 w-screen justify-start'>
        //         <NavigationMenuItem>
        //             <NavigationMenuTrigger>Transacciones</NavigationMenuTrigger>
        //             <NavigationMenuContent>
        //                 <ul className="md:w-[400px] p-2">
        //                     <ListItem href="/sistema" title="Historia clinica">
        //                         Procesos de registro de la historia clinica.
        //                     </ListItem>
        //                     <ListItem href="/sistema/triaje" title="Triaje">
        //                         Informacion sobre Triaje.
        //                     </ListItem>
        //                 </ul>
        //             </NavigationMenuContent>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             <NavigationMenuTrigger>Reportes</NavigationMenuTrigger>
        //             <NavigationMenuContent>
        //                 <ul className="w-[400px] p-2">
        //                         <ListItem
        //                             title="Reprte parte diario"
        //                             href="/sistema/reportes"
        //                         >
        //                             Descripcion sobre reportes parte diario
        //                         </ListItem>
        //                 </ul>
        //             </NavigationMenuContent>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             <Link href="/sistema/configuracion" legacyBehavior passHref>
        //                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        //                     Configuracion
        //                 </NavigationMenuLink>
        //             </Link>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer gap-2`}>
        //                 <LogOut />
        //                 Salir del sistema
        //             </NavigationMenuLink>
        //         </NavigationMenuItem>
        //     </NavigationMenuList>
        // </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
