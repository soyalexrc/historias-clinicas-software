import LoginForm from "@/components/auth/LoginForm";
import LoginAnimation from "@/components/auth/LoginAnimation";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default async function Home() {
    const user = await currentUser();

    if (user) {
        redirect('/');
    }

    return (
        <main className="grid grid-cols-12 min-h-screen">
            <div className='col-span-7 bg-gray-100 flex items-center justify-center'>
                <p>informacion sobre smart report (carousel animado, etc...)</p>
            </div>
            <div className='col-span-5 p-12 flex justify-center'>
                <div>
                    <div className='flex justify-center'>
                        <LoginAnimation/>
                    </div>
                    <h1 className='text-4xl text-center mb-10'>Ingreso al sistema</h1>
                    <LoginForm/>
                </div>
            </div>
        </main>
    );
}
