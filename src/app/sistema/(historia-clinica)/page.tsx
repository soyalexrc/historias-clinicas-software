import MedicalRecordsToolbar from "@/components/medical-records/MedicalRecordsToolbar";
import MedicalRecordsForm from "@/components/medical-records/MedicalRecordsForm";

export default function Page() {
    return (
        <div>
            <MedicalRecordsToolbar />
            <div className='h-full overflow-auto max-h-[58vh]'>
                <div className='h-[1200px]'>
                    <MedicalRecordsForm />
                </div>
            </div>
        </div>
    )
}
