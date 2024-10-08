'use client';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useSignIn} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {ClerkUser} from "@/lib/interfaces/User";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {TriangleAlert} from "lucide-react";

const formSchema = z.object({
    username: z.string().min(3, {
        message: "Este campo es requerido.",
    }),
    password: z.string().min(3, {
        message: 'Este campo es requerido.',
    })
})

export default function LoginForm() {
    const {isLoaded, setActive, signIn} = useSignIn()
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<any[]>([])
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!isLoaded) {
            return;
        }
        setErrors([]);
        setLoading(true);
        try {
            const completeSignIn = await signIn?.create({
                identifier: values.username,
                password: values.password
            });
            if (setActive) {
                await setActive({session: completeSignIn?.createdSessionId})

                // const data = await fetch('/api/auth/user/getUserInSession');
                // const user = await data.json() as ClerkUser;
                // switch (user.publicMetadata.role) {
                //     case "cashier":
                //         router.replace('/sistema/filiacion');
                //         break;
                //     case "admin":
                //         router.replace('/sistema/administracion');
                //         break;
                //     case "attention":
                //         router.replace('/sistema/atencion');
                // }
            }
        } catch (err: any) {
            console.log(err.errors)
            setErrors(err.errors)
            console.log(err);
            setLoading(false);
            //     TODO handle Error Signing In
        }
    }

    return (
        <>
            <Form {...form}>
                <form className='w-[450px]' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='username'
                        render={({field}) => (
                            <FormItem className='mb-10'>
                                <FormLabel>Nombre de usuario</FormLabel>
                                <FormControl>
                                    <Input className='min-h-10' placeholder='Nombre de usuario' {...field} />
                                </FormControl>
                                <FormDescription>
                                    Este es tu nombre de acceso
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Contrasena</FormLabel>
                                <FormControl>
                                    <Input className='min-h-10' placeholder='*******' {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className="my-4">
                        {
                            errors.length > 0 && errors.map(error => (
                                <Alert className="my-2" key={error.code} variant="destructive">
                                    <TriangleAlert className="h-4 w-4" />
                                    <AlertTitle>Error al iniciar sesion</AlertTitle>
                                    <AlertDescription>
                                        {error.longMessage}
                                    </AlertDescription>
                                </Alert>
                            ))
                        }
                    </div>
                    <Button type="submit" disabled={loading} className='w-full mt-10 flex gap-2'>
                        {
                            loading &&
                            <div
                                className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status"/>
                        }
                        {loading ? 'Ingresando...' : 'Ingresar'}
                    </Button>
                </form>
            </Form>
        </>
    )
}
