'use client';
import {DatePicker} from "@/components/ui/date-picker";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {SearchX} from "lucide-react";
import {Badge} from "@/components/ui/badge";

const formSchema = z.object({
    dateFrom: z.date().optional(),
    dateTo: z.date().optional(),
    nroSerie: z.string().optional(),
    nroDoc: z.string({required_error: 'Este campo es requerido'}).min(8, 'debe tener al menos 8 caracteres').max(11, ' debe tener como máximo 11 caracteres').optional(),
    apamnoRazonSocialAdquiriente: z.string().optional(),
    nroDocAdquiriente: z.string().optional(),
    service: z.string().optional()
})

export default function ReportsFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const params = new URLSearchParams(searchParams.toString());
        if (values.service) {
            params.set('service', values.service);
        } else {
            params.delete('service');
        }
        if (values.nroDoc) {
            params.set('C_NRO_DOC', values.nroDoc);
        } else {
            params.delete('C_NRO_DOC');
        }
        if (values.nroSerie) {
            params.set('C_NRO_SERIE', values.nroSerie);
        } else {
            params.delete('C_NRO_SERIE');
        }
        if (values.nroDocAdquiriente) {
            params.set('C_NRO_DOC_ADQUIRIENTE', values.nroDocAdquiriente);
        } else {
            params.delete('C_NRO_DOC_ADQUIRIENTE');
        }



        if (values.dateTo && values.dateFrom && values.dateFrom) {
            params.set('datefrom', values.dateFrom.toISOString());
            params.set('dateTo', values.dateTo.toISOString());
        } else {
            params.delete('datefrom');
            params.delete('dateTo');
        }
        router.push(pathname + '?' + params.toString());

    }
    return (
        <div className="flex flex-col gap-3 fixed top-30 left-0 h-full bg-white z-10 p-6">
            <span className="mb-5"/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="dateFrom"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center justify-between">
                                    <FormLabel>Filtro de fechas</FormLabel>
                                    <Badge onClick={() => {
                                        form.resetField('dateFrom');
                                        form.resetField('dateTo');
                                    }} variant="destructive" className="cursor-pointer select-none">Limpiar</Badge>
                                </div>
                                <FormControl>
                                    <DatePicker
                                        placeholder="Desde"
                                        className="h-8 w-full"
                                        selected={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateTo"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <DatePicker
                                        placeholder="Hasta"
                                        className="h-8 w-full"
                                        selected={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full h-2 border-b-2 border-gray-200" />
                    <div className="flex items-end w-full gap-2">
                        <FormField
                            control={form.control}
                            name="nroSerie"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Nro de serie</FormLabel>
                                    <FormControl>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="h-8 w-full">
                                                <SelectValue  className="h-8" placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="BC01">BC01</SelectItem>
                                                <SelectItem value="BE01">BE01</SelectItem>
                                                <SelectItem value="BE02">BE02</SelectItem>
                                                <SelectItem value="BE03">BE03</SelectItem>
                                                <SelectItem value="BF01">BF01</SelectItem>
                                                <SelectItem value="FE01">FE01</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="button" onClick={() => form.setValue('nroSerie', '')} variant='destructive' className="h-8" size="icon">
                            <SearchX size={20} />
                        </Button>
                    </div>
                    <FormField
                        control={form.control}
                        name="nroDoc"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nro de ticket</FormLabel>
                                <FormControl>
                                    <Input  className="h-8 w-full" placeholder="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nroDocAdquiriente"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>DNI de paciente</FormLabel>
                                <FormControl>
                                    <Input className="h-8 w-full" placeholder="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="apamnoRazonSocialAdquiriente"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nombre de paciente</FormLabel>
                                <FormControl>
                                    <Input className="h-8 w-full" placeholder="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="flex items-end w-full gap-2">
                        <FormField
                            control={form.control}
                            name="service"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel>Nombre de servicio</FormLabel>
                                    <FormControl>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="h-8 w-full">
                                                <SelectValue className="h-8 w-full" placeholder=""/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Traumatologia">Traumatologia</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="button" onClick={() => form.setValue('service', '')} variant='destructive'
                                className="h-8" size="icon">
                            <SearchX size={20}/>
                        </Button>
                    </div>

                    {/*<Input className="h-8" type="text" placeholder="Descripcion"/>*/}
                    <Button type="submit" className="w-full" style={{  marginTop: '2rem'}}>Buscar</Button>
                </form>
            </Form>
        </div>


)
}
