'use client';

import {CalendarClock, CircleUserRound, Contact, Crown, FileSpreadsheet, Hospital, Stethoscope} from "lucide-react";
import {format} from "date-fns";
import {es} from "date-fns/locale";
import {useEffect, useState} from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

type Props = {
    firstName: string;
    lastName: string;
    username: string;
    role: string;
    type: string;
    serviceTitle: string;
}

export default function MainFooter(props: Props) {
    const [fullDate, setFullDate] = useState<string>('');
    const locale = es;

    function getRealTimeDateTime() {
        const today = new Date();
        const weekday = format(today, 'EEEE', {locale});
        const monthDay = format(today, 'd MMMM', {locale});
        const year = format(today, 'yyyy', {locale});
        // const time = format(today, 'h:mm:ss a', {locale});
        // setFullDate(`${weekday}, ${monthDay} de ${year} ${time}`);
        setFullDate(`${weekday}, ${monthDay} de ${year} `);
    }

    useEffect(() => {
        getRealTimeDateTime();
        // const intervalId = setInterval(getRealTimeDateTime, 1000); // Update every second
        // TODO: evaluar si este intervalo es necesario....
        // return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className='flex justify-end p-3 border-t-2 fixed bottom-0 bg-white z-10 w-full'>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <CircleUserRound size={20}/>
                <p className='text-xs'>{props.firstName} {props.lastName}</p>
            </div>

            {
                <GetRoleCell
                    role={props.role}
                    serviceTitle={props.serviceTitle}
                    type={props.type}
                />
            }

            <div className='flex items-center gap-2 border-r-2 px-6'>
                <Hospital size={20}/>
                <p className='text-xs'>Policlinico Brena</p>
            </div>

            <div className='flex items-center gap-2 border-r-2 px-6'>
                <Contact size={20} />
                <p className="text-xs">{props.username}</p>
            </div>
            <div className='flex items-center gap-2 px-6'>
                <CalendarClock size={20}/>
                <p className="text-xs">{fullDate || '...'}</p>
            </div>
        </footer>
    )
}

function GetRoleCell({ role, serviceTitle, type }: { role: string, serviceTitle: string | undefined, type: string | undefined }) {

    if (role === 'attention') {
        return (
            <div className='flex items-center gap-2 border-r-2 px-6 relative'>
                <Stethoscope size={20}/>
                <p className="text-xs">{serviceTitle}</p>
                {
                    type === 'chief' &&
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Crown size={15} className='absolute right-2 top-[-6px] text-yellow-500 rotate-45'/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Este icono indica que eres jefe de servicio.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                }
            </div>
        )
    }

    if (role === 'reporting') {
        return (
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <FileSpreadsheet size={20}/>
                <p className="text-xs">Reportes</p>
            </div>
        )
    }

    return (
        <div className='flex items-center gap-2 border-r-2 px-6'>
            <CircleUserRound size={20}/>
            <p className="text-xs">default</p>
        </div>
    )
}
