import {Input} from "@/components/ui/input";
import {DatePicker} from "@/components/ui/date-picker";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {columns as reportsValidationColumns, Payment} from "@/components/reports/validation/columns";
import {DataTable as ReportsValidationDataTable} from "@/components/reports/validation/data-table";
import React from "react";

const data: Payment[] = Array.from({length: 1000}, (_, index) => ({
    id: `id_${index.toString().padStart(3, '0')}`,
    amount: (index + 1) * 100,
    status: ["pending", "processing", "success", "failed"][index % 4] as Payment["status"],
    email: `user${index}@example.com`,
}));

export default function Page() {
    return (
        <div className="p-6 ">
            <h1 className="text-2xl mb-6">Validacion y busqueda de tickets</h1>
            <div className="relative">
                <div className="flex flex-col gap-3 fixed top-30 left-0 h-full bg-white z-10 p-6">
                    <span className="mb-5"/>
                    <DatePicker placeholder="Desde" className="h-8 w-full"/>
                    <DatePicker placeholder="Hasta" className="h-8 w-full"/>
                    <Select>
                        <SelectTrigger className="h-8 w-full">
                            <SelectValue placeholder="Nro de serie"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="BC01">BC01</SelectItem>
                            <SelectItem value="BE01">BE01</SelectItem>
                            <SelectItem value="BE02">BE02</SelectItem>
                            <SelectItem value="BE03">BE03</SelectItem>
                            <SelectItem value="BF01">BF01</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input className="h-8" type="text" maxLength={8} minLength={8} placeholder="Nro de ticket"/>
                    <Input className="h-8" type="text" placeholder="Nombre de paciente"/>
                    <Input className="h-8" type="text" maxLength={10} placeholder="DNI de paciente"/>
                    <Input className="h-8" type="text" placeholder="Descripcion"/>
                    <Button className="my-4">Buscar</Button>
                    <p className="text-sm text-gray-500"><b>250</b> Resultados de encontrados.</p>

                </div>
                <div className="ml-[250px] pb-10">
                    <ReportsValidationDataTable columns={reportsValidationColumns} data={data}/>
                </div>
            </div>
        </div>
    )
}
