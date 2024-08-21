import {Input} from "@/components/ui/input";
import {DatePicker} from "@/components/ui/date-picker";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {columns as reportsValidationColumns, Payment} from "@/components/reports/validation/columns";
import {DataTable as ReportsValidationDataTable} from "@/components/reports/validation/data-table";
import React from "react";
import {TicketForReports} from "@/lib/interfaces/Ticket";

const data: TicketForReports[] = [
    {
        id: 44,
        C_ID: "266435",
        C_NRO_DOC: "12345678",
        C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: "Juan Perez",
        C_FEC_CREA_FACE: "2024-08-14 16:03:47.717",
        C_NRO_DOC_ADQUIRIENTE: "12345678",
        C_NRO_SERIE: "BE01",
        C_MONEDA: "PEN",
        C_MONTO_PAGAR: 430,
        C_MONTO_TOTAL_IGV: 364,
        details: [
            {
                id: 1,
                Nombre: "TERAPIA FISICA",
                C_CANTIDAD_ITEM: "1",
                C_COD_COMERCIAL_PROD_SERV: "Examenes Auxiliares",
                C_COD_PROD_SERV_ITEM: "SRV0736",
                C_DESRIP_ITEM: "TERAPIA FISICA",
                C_IGV_TOTAL_ITEM: "64",
                C_PRECIO_VENTA_UNITARIO_ITEM: "425",
                C_TOTAL_ITEM: "425",
                C_VALOR_ITEM: "360",
                CA01: "Examenes Auxiliares",
                CA02: 'Terapia Fisica',
                C_VALOR_VENTA_UNITARIA: "360",
                Cd_Srv: "SRV0736",
                CodCo: "Examenes Auxiliares",
                sid: 1682,
                Descrip: "Terapia Fisica"
            },
            {
                id: 2,
                Nombre: "HISTORIA CLINICA",
                C_CANTIDAD_ITEM: "1",
                C_COD_COMERCIAL_PROD_SERV: "Examenes Auxiliares",
                C_COD_PROD_SERV_ITEM: "SRV0736",
                C_DESRIP_ITEM: "HISTORIA CLINICA",
                C_IGV_TOTAL_ITEM: "0",
                C_PRECIO_VENTA_UNITARIO_ITEM: "5",
                C_TOTAL_ITEM: "5",
                C_VALOR_ITEM: "4",
                CA01: "Examenes Auxiliares",
                CA02: 'Medicina General',
                C_VALOR_VENTA_UNITARIA: "4",
                Cd_Srv: "SRV0863",
                CodCo: "Examenes Auxiliares",
                sid: 1809,
                Descrip: "Medicina General"
            }
        ]
    }
]

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
                    <p className="text-sm text-gray-500"><b>1</b> Resultado(s) encontrado(s).</p>

                </div>
                <div className="ml-[250px] pb-10">
                    <ReportsValidationDataTable columns={reportsValidationColumns} data={data}/>
                </div>
            </div>
        </div>
    )
}
