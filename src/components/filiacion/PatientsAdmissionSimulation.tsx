'use client';

import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MEDICAL_SERVICES} from "@/lib/data/medical-services";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {addDoc, collection} from "@firebase/firestore";
import db from "@/lib/firebase/firestore";

export default function PatientsAdmissionSimulation() {
    const [selectedMedicalService, setSelectedMedicalService] = useState<any>('traumatologia')
    const [patientName, setPatientName] = useState<string>('');

    function getRandomName() {
        const firstNameList = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
        const lastNameList = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
        const firstNameIndex = Math.floor(Math.random() * firstNameList.length);
        const lastNameIndex = Math.floor(Math.random() * lastNameList.length);
        const fullName = `${firstNameList[firstNameIndex]} ${lastNameList[lastNameIndex]}`;
        setPatientName(fullName);
    }

    async function dispatchPatientToService() {
        if (!selectedMedicalService) return;
        if (!patientName) return;
        try {
            const collectionRef = collection(db, selectedMedicalService)
            const documentData = {
                name: patientName,
                service: 'Traumatologia',
                attend: false,
                datetime: new Date(),
            }
            const newDocRef = await addDoc(collectionRef, documentData)
            console.log(newDocRef);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='mt-4 flex gap-4'>
            <Select value={selectedMedicalService} onValueChange={setSelectedMedicalService}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecciona una especialidad"/>
                </SelectTrigger>
                <SelectContent>
                    {
                        MEDICAL_SERVICES.map(ms => (
                            <SelectItem key={ms.value} value={ms.value}>{ms.title}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
            <div className='relative w-[300px]'>
                <Input value={patientName} onChange={({target}) => setPatientName(target.value)}
                       className='min-h-10 pr-[100px]' placeholder='Nombre de paciente'/>
                <Button variant='secondary' className='absolute right-0 top-0' onClick={getRandomName}>Aleatorio</Button>
            </div>
            <Button onClick={dispatchPatientToService}>Ingresar paciente</Button>
        </div>
    )
}
