'use client';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const formSchema = z.object({
    username: z.string().min(3, {
        message: "Este campo es requerido.",
    }),
    password: z.string().min(3, {
        message: 'Este campo es requerido.',
    })
})

export default function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form className='w-[450px]' onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem className='mb-10'>
                            <FormLabel>Nombre de usuario</FormLabel>
                            <FormControl>
                                <Input className='min-h-10' placeholder='Nombre de usuario' {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es tu nombre de acceso
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contrasena</FormLabel>
                            <FormControl>
                                <Input className='min-h-10' placeholder='*******' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='w-full mt-10'>Ingresar</Button>

            </form>
        </Form>
    )
}
