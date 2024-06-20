'use client';


import {Input} from '@/components/ui/input';
import {Textarea} from "@/components/ui/textarea";


export default function TransactionsForm() {


    return (
        <div>
            <div className='border-b-2 pb-2 flex items-center gap-6'>
                <div>
                    <div className='mt-2 flex gap-6'>
                        <div>
                            <small className='font-bold'>Fecha de atencion</small>
                            <Input value='06/09/2023' disabled className='w-[110px]'/>
                        </div>
                        <div>
                            <small className='font-bold'>Hora de atencion</small>
                            <Input value='08:38:17 AM' className='w-[110px]' disabled/>
                        </div>
                        <div>
                            <small className='font-bold'>Consultorio</small>
                            <Input value='002' className='w-[55px]' disabled/>
                        </div>
                        <div>
                            <small className='font-bold'>Medico</small>
                            <Input value='Renzo Rodriguez' disabled/>
                        </div>
                        <div>
                            <small className='font-bold'>turno</small>
                            <Input value='Manana' className='w-[80px]' disabled/>
                        </div>
                    </div>
                    <div className='mt-2 flex gap-6'>
                        <div>
                            <small className='font-bold'>Fecha de ingreso</small>
                            <Input value='RENZO RODRIGUEZ - 06/09/2023 08:38:17 AM' disabled className='w-[340px]'/>
                        </div>
                        <div>
                            <small className='font-bold'>Fecha de modificacion</small>
                            <Input value='RENZO RODRIGUEZ - 06/09/2023 10:38:17 AM' disabled className='w-[340px]'/>
                        </div>
                    </div>
                </div>
                <div>
                    <small className='font-bold'>Motivo de edicion</small>
                    <Textarea/>
                </div>
            </div>
            <div className='mt-2 flex gap-6 pt-2'>
                <div className='flex gap-2 items-center'>
                    <small className='font-bold'>Paciente</small>
                    <Input value='Alex Leonardo Rodriguez Carvajal' disabled/>
                </div>
                <div className='flex gap-2 items-center'>
                    <small className='font-bold'>Comprobante</small>
                    <div className='flex'>
                        <Input value='Boleta electronica' disabled/>
                        <Input value='149823929' className='w-[105px]' disabled/>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <small className='font-bold'>Especialidad</small>
                    <Input value='Traumatologia' disabled/>
                </div>
            </div>
        </div>
    )
}
