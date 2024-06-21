'use client';

import {CalendarClock, CircleUserRound, Contact, Crown, Hospital, Stethoscope} from "lucide-react";
import {format} from "date-fns";
import {es} from "date-fns/locale";
import {useEffect, useState} from "react";
import {useAppSelector} from "@/lib/store/hooks";
import {selectUser} from "@/lib/store/features/auth/state/authSlice";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export default function MainFooter() {
    const user = useAppSelector(selectUser);
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
        <footer className='flex justify-end p-3 border-t-2 fixed bottom-0 bg-white z-10 w-full'>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <CircleUserRound size={20}/>
                <p className='text-xs'>{user?.firstName} {user.lastName}</p>
            </div>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <Hospital size={20}/>
                <p className='text-xs'>Policlinico Brena</p>
            </div>
            <div className='flex items-center gap-2 border-r-2 px-6 relative'>
                <Stethoscope size={20}/>
                <p className="text-xs">{user.publicMetadata.service.title}</p>
                {
                    user.publicMetadata.type === 'chief' && user.publicMetadata.role === 'attention' &&
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Crown size={15} className='absolute right-2 top-[-6px] text-yellow-500 rotate-45' />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Este icono indica que eres jefe de servicio.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                }
            </div>
            <div className='flex items-center gap-2 border-r-2 px-6'>
                <Contact size={20} />
                <p className="text-xs">{user.username}</p>
            </div>
            <div className='flex items-center gap-2 px-6 min-w-[290px]'>
                <CalendarClock size={20}/>
                <p className="text-xs">{fullDate || '...'}</p>
            </div>
        </footer>
    )
}
