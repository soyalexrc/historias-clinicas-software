import PatientsAdmissionSimulation from "@/components/filiacion/PatientsAdmissionSimulation";

export default function Page() {
    return (
        <div className='p-10'>
            <h1 className='text-4xl'>Bienvenido a filiacion!</h1>
            <div className='max-w-[700px] mt-2'>
                <p>En esta seccion podras encontrar informacion relevante para personal de caja.</p>
                <p>Por ahora estamos trabajando en esta funcionalidad. Pero, dejaremos un boton para que
                    puedas Simular el ingreso de pacientes en diferentes especialidades</p>
            </div>
            <PatientsAdmissionSimulation />
        </div>
    )
}
