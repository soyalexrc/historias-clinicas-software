import {ReactNode} from "react";
import MedicalRecordsToolbar from "@/components/layout/MedicalRecordsToolbar";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div>
            <MedicalRecordsToolbar />
            <div className='py-4'>
                {children}
            </div>
        </div>
    )
}
