"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DatePickerDemoProps = {
  value?: Date
  onChange?: (date: Date) => void
}

export function DatePickerDemo({ value, onChange }: DatePickerDemoProps) {
  const [date, setDate] = React.useState<Date>()
  const selectedDate = value ?? date

  const handleSelect = (date: Date | undefined) => {
    if (!date) return

    if (onChange) {
      onChange(date)
      return
    }

    setDate(date)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!selectedDate}
          className="w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          <CalendarIcon />
          {selectedDate ? format(selectedDate, "yyyy/M/d") : <span>日付を選択</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={selectedDate} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  )
}