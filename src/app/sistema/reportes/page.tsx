import {columns as reportsValidationColumns, Payment} from "@/components/reports/validation/columns";
import {DataTable as ReportsValidationDataTable} from "@/components/reports/validation/data-table";
import React, {Suspense} from "react";
import {TicketForReports} from "@/lib/interfaces/Ticket";
import ReportsFilters from "@/components/reports/ReportsFilters";
import {Skeleton} from "@/components/ui/skeleton";

type SearchParams = {
    [key: string]: string | string[] | undefined;
};

export default function Page({ searchParams }: { searchParams: SearchParams }) {
    return (
        <div className="p-6 ">
            <h1 className="text-2xl mb-6">Reportes</h1>
            <div className="flex">
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
        <div className="pb-10 flex-1">
            <p className="text-sm text-gray-500"><b>{tickets.length ?? 0}</b> Resultado(s) encontrado(s).</p>
            <ReportsValidationDataTable columns={reportsValidationColumns} data={tickets}/>
        </div>
    )
}

function Loader() {
    return (
        <div className="flex-1 pb-10">
            <div className="rounded-md border overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Skeleton className="h-4 w-24"/>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Skeleton className="h-4 w-24"/>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Skeleton className="h-4 w-24"/>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Skeleton className="h-4 w-24"/>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {Array.from({length: 12}).map((_, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-full"/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-full"/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-full"/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-full"/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
