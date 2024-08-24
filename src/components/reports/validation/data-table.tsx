"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Eye} from "lucide-react";
import {DataTablePagination} from "@/components/reports/validation/pagination";
import {validateTicketsAction} from "@/actions/tickets";
import {ClerkUser} from "@/lib/interfaces/User";
import {toast} from "sonner"
import {useRouter} from "next/navigation";
import {Ticket} from "@prisma/client";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const router = useRouter();
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        getSortedRowModel: getSortedRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
        },
    })

    async function validateTickets() {
        // @ts-ignore
        const selectedIds: number[] = table.getFilteredSelectedRowModel().rows.map(r => r.original.id);
        const userInSessionRaw = await fetch('/api/auth/user/getUserInSession');
        const userInSession = await userInSessionRaw.json() as ClerkUser;
        const userFullName = userInSession.firstName + ' ' + userInSession.lastName;
        const response = await validateTicketsAction(selectedIds, userFullName);

        toast(response.message);

        if (response.success) {
            router.refresh();
            setRowSelection({});
        }
    }

    console.log(!(table.getFilteredSelectedRowModel().rows.length > 0 && table.getFilteredSelectedRowModel().rows.every(r => !(r.original as Ticket).isValidated)))

    return (
        <div>
            <div className="flex justify-end mb-4 gap-2">
                <Button disabled={table.getFilteredSelectedRowModel().rows.length < 1}>
                    Exportar Excel
                </Button>
                <Button disabled={table.getFilteredSelectedRowModel().rows.length < 1}>
                    Exportar PDF
                </Button>
                <Button
                    disabled={table.getFilteredSelectedRowModel().rows.length < 1 || table.getFilteredSelectedRowModel().rows.some(r => (r.original as Ticket).isValidated)}
                    onClick={validateTickets} variant="success">
                    Validar
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex gap-2">
                            Columnas
                            <Eye/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border overflow-x-auto">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No hay resultados.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table}/>
        </div>
    )
}
