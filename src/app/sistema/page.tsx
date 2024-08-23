import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default async function Page() {
    const user = await currentUser();

    if (user?.publicMetadata.role === 'admin') {
        redirect('/sistema/administracion')
    }

    if (user?.publicMetadata.role === 'attention') {
        redirect('/sistema/atencion')
    }

    if (user?.publicMetadata.role === 'cashier') {
        redirect('/sistema/filiacion')
    }

    if (user?.publicMetadata.role === 'reporting') {
        redirect('/sistema/reportes')
    }
    return (
        <div>
            <p>cargando...</p>
        </div>
    );
}
