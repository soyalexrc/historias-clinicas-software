"use client"

import {ColumnDef} from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal, ArrowUpDown} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox"
import {TicketForReports, Detail, Service} from "@/lib/interfaces/Ticket";
import {format} from "date-fns";
import {es} from 'date-fns/locale';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<TicketForReports>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "C_NRO_DOC",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Ticket
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => {
            const ticketNumber: string = row.original.C_NRO_DOC;
            const ticketSeries: string = row.original.C_NRO_SERIE;
            return <div className="font-medium">{ticketSeries} - {ticketNumber}</div>
        },
    },
    {
        accessorKey: "C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre de paciente
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
    },
    {
        accessorKey: "C_NRO_DOC_ADQUIRIENTE",
        header: "DNI de paciente",
    },
    {
        accessorKey: "C_FEC_CREA_FACE",
        header: "Fecha de emisión",
        cell: ({row}) => {
            const date = row.original.C_FEC_CREA_FACE;
            return <div className="font-medium">{format(date, 'PP pp', {locale: es})}</div>
        }
    },
    {
        accessorKey: "service",
        header: "Servicio(s)",
        cell: ({row}) => {
            const services = row.original.services
            return (
                <div>
                    {
                        services.map((service, index) => (
                            <div key={service} className="text-sm">
                                - {service}
                            </div>
                        ))
                    }
                </div>
            )
        },
    },
    {
        accessorKey: "C_MONTO_PAGAR",
        header: () => <div className="text-right">Monto</div>,
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("C_MONTO_PAGAR"))
            const formatted = new Intl.NumberFormat("es-PE", {
                style: "currency",
                currency: "PEN",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({row}) => {
            const ticket = row.original;

            function calculateTotal(details: Detail[]): number {
                return details.reduce((acc, detail) => {
                    return acc + detail.C_TOTAL_ITEM
                }, 0)
            }

            return (
                <Sheet>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-6 w-6 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <SheetTrigger>
                                <DropdownMenuItem>
                                    Ver detalle de ticket
                                </DropdownMenuItem>
                            </SheetTrigger>
                            {/*<DropdownMenuSeparator />*/}
                            {/*<DropdownMenuItem>View customer</DropdownMenuItem>*/}
                            {/*<DropdownMenuItem>View payment details</DropdownMenuItem>*/}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>{format(ticket.C_FEC_CREA_FACE, 'PP pp', { locale: es })}</SheetTitle>
                            {/*<SheetDescription>*/}
                            {/*    This action cannot be undone. This will permanently delete your account*/}
                            {/*    and remove your data from our servers.*/}
                            {/*</SheetDescription>*/}
                        </SheetHeader>

                        <div className="max-w-md mx-auto bg-white shadow-xl p-6">
                            <div className="mb-4">
                                <p className="text-sm text-gray-600 mt-4">{ticket.C_NRO_SERIE.includes('F') ? 'Factura' : 'Boleta'}: {ticket.C_NRO_SERIE} - {ticket.C_NRO_DOC}</p>
                                <p className="text-sm text-gray-600">Cliente: {ticket.C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE}</p>
                            </div>
                            <div className="border-t border-gray-200 py-2">
                                <div className="grid grid-cols-12 mb-2">
                                    <span className="text-gray-600 font-bold col-span-1">C</span>
                                    <span className="text-gray-600 font-bold col-span-6">Descripcion</span>
                                    <span className="text-gray-600 font-bold col-span-5 text-right">Precio</span>
                                </div>
                                {
                                    ticket.details.map(detail => (
                                        <div key={detail.id} className="grid grid-cols-12 mb-1">
                                            <span className="text-xs text-gray-600 col-span-1">{detail.C_CANTIDAD_ITEM} x</span>
                                            <span className="text-xs text-gray-600 col-span-6">{detail.C_DESCRIP_ITEM}</span>
                                            <span className="text-xs text-gray-600 col-span-5 text-right">{detail.C_TOTAL_ITEM}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="border-t border-gray-200 py-2">
                                <div className="flex justify-between">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold">S/. {calculateTotal(ticket.details)}</span>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

            )
        },
    },
]
