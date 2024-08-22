import {columns as reportsValidationColumns, Payment} from "@/components/reports/validation/columns";
import {DataTable as ReportsValidationDataTable} from "@/components/reports/validation/data-table";
import React, {Suspense} from "react";
import {TicketForReports} from "@/lib/interfaces/Ticket";
import ReportsFilters from "@/components/reports/ReportsFilters";

type SearchParams = {
    [key: string]: string | string[] | undefined;
};

export default function Page({ searchParams }: { searchParams: SearchParams }) {
    return (
        <div className="p-6 ">
            <h1 className="text-2xl mb-6">Reportes</h1>
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
