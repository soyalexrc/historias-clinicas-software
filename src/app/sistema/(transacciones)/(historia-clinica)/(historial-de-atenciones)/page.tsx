'use client';

import {useChannel} from "ably/react";
import {Button} from "@/components/ui/button";

export default function Page() {
    const {publish} = useChannel('ATENCION');

    function sendMessage() {
        publish('PATIENT_QUEUED', { patient: 'Alex Rodriguez', service: 'Traumatologia' })
    }
    return (
        <div className='h-full overflow-auto max-h-[58vh]'>
            <div className='h-[1200px]'>sample</div>
            <Button onClick={sendMessage}>Send random message</Button>
        </div>
    )
}
