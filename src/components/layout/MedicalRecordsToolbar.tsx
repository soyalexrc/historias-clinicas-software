'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

const childRoutes = [
    {path: '/sistema', title: 'Historial Atenciones', id: 1},
    {path: '/sistema/filiacion', title: 'Filiacion', id: 2},
    {path: '/sistema/anamnesis', title: 'Anamnesis', id: 3},
    {path: '/sistema/examen-fisico', title: 'Examen Fisico', id: 4},
    {path: '/sistema/diagnosticos', title: 'Diagnosticos', id: 5},
    {path: '/sistema/examenes-auxiliares', title: 'Examenes Auxiliares', id: 6},
    {path: '/sistema/receta-tratamiento', title: 'Receta Tratamiento', id: 7},
    {path: '/sistema/adjuntar', title: 'Adjuntar', id: 8},
]

export default function MedicalRecordsToolbar() {
    const pathname = usePathname()

    return (
        <div className='flex gap-2 flex-wrap'>
            {
                childRoutes.map(childRoute => (
                    <Link
                        className={`${childRoute.path === pathname ? 'bg-gray-600 text-white' : 'bg-gray-100 ' } py-2 px-3 rounded-sm text-sm`}
                        key={childRoute.id}
                        href={childRoute.path}>
                        {childRoute.title}
                    </Link>
                ))
            }
        </div>
    )
}
