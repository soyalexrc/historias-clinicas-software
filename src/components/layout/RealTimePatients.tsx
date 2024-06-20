'use client';

import {useEffect, useState} from "react";
import db from "@/lib/firebase/firestore";
import {collection, onSnapshot, query} from "@firebase/firestore";
import {useAppSelector} from "@/lib/store/hooks";
import {selectUser} from "@/lib/store/features/auth/state/authSlice";

export default function RealTimePatients() {
    const [patientsInQueue, setPatientsInQueue] = useState<any[]>([]);
    const user = useAppSelector(selectUser);
    useEffect(() => {
        const q = query(collection(db, user.publicMetadata.service));
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const date = doc.data().datetime.toDate();
                const data = doc.data();
                data.datetime = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
                setPatientsInQueue((prev) => [...prev, data] )
            })
        })

        return () => unsub();
    }, [])


    return (
        <div>
            <div className='border-b-2 pb-2 px-2 flex justify-between'>
                <p>En cola: {patientsInQueue?.length}</p>
                <p>Atendidos: {0}</p>
            </div>
            <div className='h-full overflow-auto max-h-[58vh]'>
                {patientsInQueue
                    ?.filter(patient => patient.service === 'Traumatologia')
                    ?.map((patientInQueue: any, index: number) => {
                        return (
                            <div key={patientInQueue + index}>
                                <div>{patientInQueue.name}</div>
                                <div>{patientInQueue.service}</div>
                                <div>{patientInQueue.datetime}</div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
