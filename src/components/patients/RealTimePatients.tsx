'use client';

import {useEffect, useId, useState} from "react";
import db from "@/lib/firebase/firestore";
import {collection, onSnapshot, query} from "@firebase/firestore";
import {useAppDispatch, useAppSelector} from "@/lib/store/hooks";
import {selectUser} from "@/lib/store/features/auth/state/authSlice";
import {addNewPatientToQueue, selectPatientsQueue} from "@/lib/store/features/patients/state/patientsSlice";
import {Patient} from "@/lib/interfaces/Patient";
import PatientCard from "@/components/patients/PatientCard";

export default function RealTimePatients() {
    const patientsInQueue = useAppSelector(selectPatientsQueue);
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    useEffect(() => {
        const q = query(collection(db, user.publicMetadata.service));
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const date = doc.data().datetime.toDate();
                const data = doc.data();
                data.datetimeString = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
                data.datetime = date.toString();
                data.id = doc.id;
                dispatch(addNewPatientToQueue(data as Patient))
            })
        })

        return () => unsub();
    }, [])

    console.log(patientsInQueue);

    return (
        <div>
            <div className='border-b-2 pb-2 px-2'>
                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center gap-2'>
                       <span className="relative flex h-3 w-3">
                      <span
                          className={`${patientsInQueue.filter(patient => !patient.attend).length > 0 && 'animate-ping'} absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75`}></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                    </span>
                        <p>En espera: </p>
                    </div>
                    <p className='font-bold text-xl'>{patientsInQueue.filter(patient => !patient.attend).length}</p>
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
                    <p className='font-bold text-xl'>{patientsInQueue.filter(patient => patient.attend).length}</p>
                </div>
            </div>
            <div className='h-full overflow-auto max-h-[58vh]'>
                {patientsInQueue?.map((patient) =>
                    <PatientCard patient={patient} key={patient.datetimeString}/>
                )}
            </div>
        </div>
    )
}
