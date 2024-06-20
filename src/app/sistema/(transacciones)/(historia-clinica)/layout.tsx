import {ReactNode} from "react";
import MedicalRecordsToolbar from "@/components/layout/MedicalRecordsToolbar";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div>
            <MedicalRecordsToolbar />
            <div className='py-4 overflow-scroll min-h-[1200px]'>
                {children}
            </div>
        </div>
    )
}
