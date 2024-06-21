'use client';

import {useEffect, useId, useRef, useState} from "react";
import db from "@/lib/firebase/firestore";
import {collection, onSnapshot, query} from "@firebase/firestore";
import {useAppDispatch, useAppSelector} from "@/lib/store/hooks";
import {selectUser} from "@/lib/store/features/auth/state/authSlice";
import {
    addNewPatientToQueue,
    selectPatientsQueue, selectPatientsQueueAttended,
    selectPatientsQueueWaiting
} from "@/lib/store/features/patients/state/patientsSlice";
import {Patient} from "@/lib/interfaces/Patient";
import PatientCard from "@/components/patients/PatientCard";

export default function RealTimePatients() {
    const patientsInQueue = useAppSelector(selectPatientsQueue);
    const patientsInQueueWaiting = useAppSelector(selectPatientsQueueWaiting);
    const patientsInQueueAttended = useAppSelector(selectPatientsQueueAttended);
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useAppDispatch();
    const audioRef = useRef<any>(null);
    const user = useAppSelector(selectUser);

    useEffect(() => {
        setLoading(true);
        const q = query(collection(db, user?.publicMetadata?.service));
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const date = doc.data().datetime.toDate();
                const data = doc.data();
                data.datetimeString = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
                data.datetime = date.toString();
                data.id = doc.id;
                dispatch(addNewPatientToQueue(data as Patient))
                setLoading(false);
            })
        })

        return () => unsub();
    }, [])

    function playSound() {
        audioRef.current?.play();
    }

    return (
        <div className='relative'>
            <div className='border-b-2 pb-2 px-2'>
                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center gap-2'>
                       <span className="relative flex h-3 w-3">
                      <span
                          className={`${patientsInQueueWaiting > 0 && 'animate-ping'} absolute inline-flex h-full w-full rounded-full ${patientsInQueueWaiting >= 5 ? 'bg-red-400 ' : 'bg-yellow-400'} opacity-75`}></span>
                      <span
                          className={`relative inline-flex rounded-full h-3 w-3 ${patientsInQueueWaiting >= 5 ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                    </span>
                        <p>En espera: </p>
                    </div>
                    <p className='font-bold text-xl'>{patientsInQueueWaiting}</p>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center gap-2'>
                       <span className="relative flex h-3 w-3">
                      <span
                          className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                        <p>Atendidos: </p>
                    </div>
                    <p className='font-bold text-xl'>{patientsInQueueAttended}</p>
                </div>
            </div>
            <div className='h-full overflow-auto max-h-[58vh]'>
                {patientsInQueue?.map((patient) =>
                    <PatientCard patient={patient} key={patient.datetimeString}/>
                )}
            </div>
            <audio ref={audioRef} className='none' src="/sounds/notification-sound.mp3"></audio>
            <div
                style={{zIndex: loading ? '10' : '-10'}}
                className={`absolute top-0 left-0 w-full h-screen bg-gray-200 flex pt-[15rem] items-center flex-col transition duration-300 ease-in-out ${loading ? 'opacity-80' : 'opacity-0'}`}
            >
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1s_linear_infinite]"
                >
                </div>
                <p className='mt-2'>Cargando pacientes...</p>
            </div>
        </div>
    )
}
