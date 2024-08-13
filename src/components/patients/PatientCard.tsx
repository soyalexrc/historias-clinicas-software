import {Patient} from "@/lib/interfaces/Patient";
import {Calendar, Clock, UserCircle} from "lucide-react";

export default function PatientCard({patient}: { patient: Patient }) {
    return (
        <div
            className={`rounded-md px-4 py-2 my-1 cursor-pointer border-b-4 border-b-white ${!patient.attend ? 'bg-yellow-300' : 'bg-green-300'}`}>
            <div className='flex gap-2 items-center'>
                <UserCircle size={18}/>
                <p className='font-bold text-sm'>{patient.name}</p>
            </div>
            <div className='flex gap-2 items-center mt-1'>
                <Calendar size={18}/>
                <p className='font-bold text-sm'>{patient.datetimeString.split('-')[1]}</p>
            </div>
            {/*{*/}
            {/*    patient.datetimeString.split('-')*/}
            {/*        .map((datePart: string, index: number) => (*/}
            {/*            <div className='flex gap-2 items-center mt-1' key={datePart}>*/}
            {/*                {index === 0 ? <Clock size={18}/> : <Calendar size={18}/>}*/}
            {/*                <p className='font-bold text-sm'>{datePart}</p>*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*}*/}
        </div>
    )
}
