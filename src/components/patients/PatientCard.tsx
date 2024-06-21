import {Patient} from "@/lib/interfaces/Patient";
import {Calendar, Clock, UserCircle} from "lucide-react";

export default function PatientCard({patient}: { patient: Patient }) {
    return (
        <div
            className={`rounded-md px-4 py-2 my-1 cursor-pointer border-b-4 border-b-white ${!patient.attend ? 'bg-yellow-300' : 'bg-green-300'}`}>
            <div className='flex gap-2'>
                <UserCircle />
                <p className='font-bold'>{patient.name}</p>
            </div>
            {
                patient.datetimeString.split('-')
                    .map((datePart: string, index: number) => (
                    <div className='flex gap-2 mt-1' key={datePart}>
                        {index === 0 ? <Clock /> : <Calendar />}
                        <p className='font-bold'>{datePart}</p>
                    </div>
                ))
            }
        </div>
    )
}
