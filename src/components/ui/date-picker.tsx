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
    selected: Date | undefined;
    placeholder?: string;
    onChange: (value: Date) => void;
}

export function DatePicker({className, placeholder, selected, onChange}: Props) {
    const [datePickerOpen, setDatePickerOpen] = React.useState(false);
    return (
        <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "h-6 justify-start text-left font-normal",
                        !selected && "text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4"/>
                    {selected ? format(selected, "PPP") : <span>{placeholder ?? 'Pick a date'}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    locale={es}
                    selected={selected}
                    onSelect={(value) => {
                        onChange(value as Date)
                        setDatePickerOpen(false)
                    }}
                    disabled={(date) =>
                        date > new Date()
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
