'use client';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useClerk, useSignIn} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {getCurrentUser} from "@/actions/auth";
import {useAppDispatch} from "@/lib/store/hooks";
import {updateUserInfo} from "@/lib/store/features/auth/state/authSlice";

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
    const router = useRouter();
    const dispatch = useAppDispatch();
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
        const completeSignIn = await signIn?.create({
            identifier: values.username,
            password: values.password
        });


        if (setActive) {
            await setActive({session: completeSignIn?.createdSessionId})
            const userString = await getCurrentUser();
            const user = JSON.parse(userString!);
            dispatch(updateUserInfo(user));
            switch (user.publicMetadata.role) {
                case "cashier":
                    router.replace('/filiacion');
                    break;
                case "admin":
                    router.replace('/administracion');
                    break;
                case "attention":
                    router.replace('/sistema');
            }
        }
    }

    return (
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
                <Button type="submit" className='w-full mt-10'>Ingresar</Button>

            </form>
        </Form>
    )
}
