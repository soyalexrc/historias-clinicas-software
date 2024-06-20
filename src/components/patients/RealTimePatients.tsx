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
            <div className='border-b-2 pb-2 px-2 flex justify-between'>
                <p>En espera: <b>{patientsInQueue.filter(patient => patient.attend).length}</b></p>
                <p>Atendidos: <b>{patientsInQueue.filter(patient => !patient.attend).length}</b></p>
            </div>
            <div className='h-full overflow-auto max-h-[58vh]'>
                {patientsInQueue?.map((patient) =>
                    <PatientCard  patient={patient} key={patient.datetimeString} />
                )}
            </div>
        </div>
    )
}
