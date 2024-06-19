'use client';

import {CalendarClock, CircleUserRound, Contact, Hospital, Stethoscope} from "lucide-react";
import {format} from "date-fns";
import {es} from "date-fns/locale";
import {useEffect, useState} from "react";

export default function MainFooter() {
    const [fullDate, setFullDate] = useState<string>('');
    const locale = es;

    function getRealTimeDateTime() {
        const today = new Date();
        const weekday = format(today, 'EEEE', {locale});
        const monthDay = format(today, 'd MMMM', {locale});
        const year = format(today, 'yyyy', {locale});
        const time = format(today, 'h:mm:ss a', {locale});
        setFullDate(`${weekday}, ${monthDay} de ${year} ${time}`);
    }

    useEffect(() => {
        const intervalId = setInterval(getRealTimeDateTime, 1000); // Update every second
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className='flex p-3 border-t-2 fixed bottom-0 w-full'>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <CircleUserRound size={20}/>
                <p className='text-xs'>Renzo Rodriguez</p>
            </div>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <Hospital size={20}/>
                <p className='text-xs'>Policlinico Brena</p>
            </div>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <Stethoscope size={20}/>
                <p className="text-xs">Traumatologia</p>
            </div>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <Contact size={20}/>
                <p className="text-xs">Nombre de usuario generado</p>
            </div>
            <div className='flex items-center gap-2 px-6'>
                <CalendarClock size={20}/>
                <p className="text-xs">{fullDate || '...'}</p>
            </div>
        </footer>
    )
}
