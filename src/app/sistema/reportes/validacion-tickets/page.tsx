import {Input} from "@/components/ui/input";
import {DatePicker} from "@/components/ui/date-picker";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {columns as reportsValidationColumns, Payment} from "@/components/reports/validation/columns";
import {DataTable as ReportsValidationDataTable} from "@/components/reports/validation/data-table";
import React, {Suspense} from "react";
import {TicketForReports} from "@/lib/interfaces/Ticket";
import ReportsFilters from "@/components/reports/ReportsFilters";

// const data: TicketForReports[] = [
//     {
//         "id": 954,
//         "C_ID": 267530,
//         "C_FEC_ED": "2024-08-21T16:38:00.000Z",
//         "C_TIP_DOC_EMISOR": "6",
//         "C_APAMNO_RAZON_SOCIAL_EMISOR": "GRUPO SALUD INTEGRAL S.A.C",
//         "C_UBIGEO_EMISOR": "150105",
//         "C_DIRECCION_EMISOR": "AV. VENEZUELA NRO. 1650  LIMA LIMA BREÑA",
//         "C_DEPARTAMENTO_EMISOR": "LIMA",
//         "C_PROVINCIA_EMISOR": "LIMA",
//         "C_DISTRITO_EMISOR": "BREÑA",
//         "C_NOMBRE_COMERCIAL_EMISOR": "GRUPO SALUD INTEGRAL S.A.C",
//         "C_TIP_DOC": "03",
//         "C_NRO_SERIE": "BE02",
//         "C_NRO_DOC": "00072064",
//         "C_NRO_DOC_ADQUIRIENTE": "45351930",
//         "C_TIP_DOC_ADQUIRIENTE": "1",
//         "C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE": "TORRES LESCANO, LEOPOLDO",
//         "C_MONEDA": "PEN",
//         "C_RUCE": "20552905556",
//         "C_MONTO_TOTAL_IGV": 72,
//         "C_TOTAL_OPERACIONES_GRAV": 400,
//         "C_MONTO_PAGAR": 472,
//         "C_MONTO_TOTAL_PERCEP": 472,
//         "C_LEYENDA": "CUATROCIENTOS SETENTA Y DOS CON 00/100 SOLES",
//         "C_FEC_CREA_FACE": "2024-08-21T16:39:34.043Z",
//         "isValidated": false,
//         "validatedDate": null,
//         "valitadedBy": null,
//         "details": [
//             {
//                 "id": 1625,
//                 "C_ID": 267530,
//                 "C_ID_ITEM": 1,
//                 "C_DESCRIP_ITEM": "TERAPIA FISICA",
//                 "C_COD_PROD_SERV_ITEM": "SRV0736",
//                 "C_VALOR_VENTA_UNITARIA": 209,
//                 "C_INDICADOR_PS_ITEM": "S",
//                 "C_PRECIO_VENTA_UNITARIO_ITEM": 247,
//                 "C_CANTIDAD_ITEM": 1,
//                 "C_IGV_TOTAL_ITEM": 37,
//                 "C_TOTAL_ITEM": 247,
//                 "C_VALOR_ITEM": 209,
//                 "C_COD_SUNAT_PROD_SERV_ITEM": "85101502",
//                 "C_COD_COMERCIAL_PROD_SERV": "Exámenes Auxiiares",
//                 "service": {
//                     "Cd_Srv": "SRV0736",
//                     "id": 1682,
//                     "CA01": "Exámenes Auxiiares",
//                     "CA02": "Terapia Fisica",
//                     "CodCo": "Exámenes Auxiiares",
//                     "Descrip": "Terapia Fisica",
//                     "Nombre": "TERAPIA FISICA"
//                 }
//             },
//             {
//                 "id": 1626,
//                 "C_ID": 267530,
//                 "C_ID_ITEM": 2,
//                 "C_DESCRIP_ITEM": "TERAPIA FISICA",
//                 "C_COD_PROD_SERV_ITEM": "SRV0736",
//                 "C_VALOR_VENTA_UNITARIA": 190,
//                 "C_INDICADOR_PS_ITEM": "S",
//                 "C_PRECIO_VENTA_UNITARIO_ITEM": 225,
//                 "C_CANTIDAD_ITEM": 1,
//                 "C_IGV_TOTAL_ITEM": 34,
//                 "C_TOTAL_ITEM": 225,
//                 "C_VALOR_ITEM": 190,
//                 "C_COD_SUNAT_PROD_SERV_ITEM": "85101502",
//                 "C_COD_COMERCIAL_PROD_SERV": "Exámenes Auxiiares",
//                 "service": {
//                     "Cd_Srv": "SRV0736",
//                     "id": 1682,
//                     "CA01": "Exámenes Auxiiares",
//                     "CA02": "Terapia Fisica",
//                     "CodCo": "Exámenes Auxiiares",
//                     "Descrip": "Terapia Fisica",
//                     "Nombre": "TERAPIA FISICA"
//                 }
//             }
//         ]
//     }
// ]

type SearchParams = {
    [key: string]: string | string[] | undefined;
};

export default function Page({ searchParams }: { searchParams: SearchParams }) {
    return (
        <div className="p-6 ">
            <h1 className="text-2xl mb-6">Validacion y busqueda de tickets</h1>
            <div className="relative">
                <ReportsFilters/>
                <Suspense fallback={<Loader />} key={JSON.stringify(searchParams)}>
                    <TableWrapper query={searchParams} />
                </Suspense>
            </div>
        </div>
    )
}



async function TableWrapper({ query }: { query: SearchParams }) {
    const filteredQuery = new URLSearchParams();

    for (const [key, value] of Object.entries(query)) {
        if (value) {
            filteredQuery.set(key, value as string);
        }
    }

    let tickets: TicketForReports[] = []

    const urlParams = new URLSearchParams(filteredQuery.toString());

    if (Object.entries(query).length > 0) {
        tickets = await fetch(`${process.env.HOST_URL}/api/ticket/reports/pendingForValidation?${urlParams}`, {
            cache: 'no-store',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((data) => data.json());
    }

    return (
        <div className="ml-[250px] pb-10">
            <p className="text-sm text-gray-500"><b>{tickets.length ?? 0}</b> Resultado(s) encontrado(s).</p>
            <ReportsValidationDataTable columns={reportsValidationColumns} data={tickets}/>
        </div>
    )
}

function Loader() {
    return (
        <div className="ml-[250px] pb-10">
            <p>Cargando...</p>
        </div>
    )
}
