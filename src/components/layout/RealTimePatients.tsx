'use client';

import {useChannel} from "ably/react";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/store/hooks";
import {addNewPatientToQueue, selectPatientsQueue} from "@/lib/store/features/patients/state/patientsSlice";

export default function RealTimePatients() {
    const patientsQueue = useAppSelector(selectPatientsQueue);
    const dispatch = useAppDispatch();
    const {channel} = useChannel('ATENCION', 'PATIENT_QUEUED', (message) => {
        dispatch(addNewPatientToQueue(message.data))
    })


    return (
        <div>
            <div className='border-b-2 pb-2 px-2 flex justify-between'>
                <p>En cola: {patientsQueue?.length}</p>
                <p>Atendidos: {0}</p>
            </div>
            <div className='h-full overflow-auto max-h-[58vh]'>
                {patientsQueue
                    ?.filter(patient => patient.service === 'Traumatologia')
                    ?.map((patientInQueue: any, index: number) => {
                        return (
                            <div key={patientInQueue + index}>
                                <span>{patientInQueue.patient}</span>
                                <span>{patientInQueue.service}</span>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
