'use client';
import {useAppDispatch, useAppSelector} from "@/lib/store/hooks";
import {
    selectCurrentPanel,
    updateCurrentPanel
} from "@/lib/store/features/navigation/state/medicalRecordNavigationSlice";
import {Button} from "@/components/ui/button";

const childRoutes = [
    'Historial Atenciones',
    'Filiacion',
    'Anamnesis - Antecedentes',
    'Examen Fisico',
    'Diagnosticos',
    'Examenes Auxiliares',
    'Receta Tratamiento',
    'Observaciones',
    'Adjuntar',
]

export default function MedicalRecordsToolbar() {
    const currentPanel = useAppSelector(selectCurrentPanel);
    const dispatch = useAppDispatch();

    return (
        <div className='flex gap-2 flex-wrap p-2'>
            {
                childRoutes.map(childRoute => (
                    <Button
                        onClick={() => dispatch(updateCurrentPanel(childRoute))}
                        variant={childRoute === currentPanel ? 'default' : 'secondary'}
                        className={`py-2 px-3 rounded-sm text-xs hover:bg-gray-950 hover:text-white h-7`}
                        key={childRoute}>
                        {childRoute}
                    </Button>
                ))
            }
        </div>
    )
}
