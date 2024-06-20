import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default async function Page() {
    const user = await currentUser();

    if (user?.publicMetadata.role === 'admin') {
        redirect('/administracion')
    }

    if (user?.publicMetadata.role === 'attention') {
        redirect('/sistema')
    }

    if (user?.publicMetadata.role === 'cashier') {
        redirect('/filiacion')
    }

    return null;
}
