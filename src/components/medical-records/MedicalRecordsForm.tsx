'use client';

import {useAppSelector} from "@/lib/store/hooks";
import {selectCurrentPanel} from "@/lib/store/features/navigation/state/medicalRecordNavigationSlice";
import AttentionsHistory from "@/components/medical-records/AttentionsHistory";
import Filiation from "@/components/medical-records/Filiation";
import Anamnesis from "@/components/medical-records/Anamnesis";
import PhysicalExam from "@/components/medical-records/PhysicalExam";
import Diagnoses from "@/components/medical-records/Diagnoses";
import AuxiliaryExams from "@/components/medical-records/AuxiliaryExams";
import RecipeTreatment from "@/components/medical-records/RecipeTreatment";
import Files from "@/components/medical-records/Files";
import Observations from "@/components/medical-records/Observations";

export default function MedicalRecordsForm() {
    const currentPanel = useAppSelector(selectCurrentPanel);

    function redirectBasedOnToolbarSelection() {
        switch (currentPanel) {
            case 'Historial Atenciones':
                return <AttentionsHistory />
            case 'Filiacion':
                return <Filiation />
            case 'Anamnesis - Antecedentes':
                return <Anamnesis />
            case 'Examen Fisico':
                return <PhysicalExam />
            case 'Diagnosticos':
                return <Diagnoses />
            case 'Examenes Auxiliares':
                return <AuxiliaryExams />
            case 'Receta Tratamiento':
                return <RecipeTreatment />
            case 'Observaciones':
                return <Observations/>
            case 'Adjuntar':
                return <Files />
            default :
                return <AttentionsHistory />

        }
    }

    return (
        <div className='px-4 py-2'>
            {redirectBasedOnToolbarSelection()}
        </div>
    )
}
