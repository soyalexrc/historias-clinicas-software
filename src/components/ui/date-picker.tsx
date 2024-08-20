"use client"

import * as React from "react"
import {format} from "date-fns"
import {es} from "date-fns/locale";

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {CalendarIcon} from "lucide-react";

type Props = {
    className?: string;
    placeholder?: string;
}

export function DatePicker({className, placeholder}: Props) {
    const [date, setDate] = React.useState<Date>()
    const [datePickerOpen, setDatePickerOpen] = React.useState(false);
    return (
        <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "h-6 justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4"/>
                    {date ? format(date, "PPP") : <span>{placeholder ?? 'Pick a date'}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    locale={es}
                    selected={date}
                    onSelect={(value) => {
                        setDate(value)
                        setDatePickerOpen(false)
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
