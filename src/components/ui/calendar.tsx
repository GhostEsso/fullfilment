"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      // "relative" makes this the positioning context for the Nav overlay
      className={cn("p-3 relative", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-y-4 sm:gap-x-4",
        month: "flex flex-col gap-y-4",
        // caption sits in the center; nav overlays it absolutely
        month_caption: "flex justify-center pt-1 items-center h-9",
        caption_label: "text-sm font-semibold",
        // Nav is a sibling of months in v9 — pin it to the top of the root
        nav: "absolute top-3 left-3 right-3 flex justify-between items-center h-9 pointer-events-none",
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 p-0 opacity-60 hover:opacity-100 pointer-events-auto rounded-lg"
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 p-0 opacity-60 hover:opacity-100 pointer-events-auto rounded-lg"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-9 font-medium text-[0.75rem] text-center",
        week: "flex w-full mt-1",
        day: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal rounded-full aria-selected:opacity-100 hover:bg-primary/10 hover:text-primary transition-colors"
        ),
        range_end: "day-range-end",
        // Selected: solid primary circle
        selected:
          "[&>button]:bg-primary [&>button]:text-white [&>button]:hover:bg-primary [&>button]:hover:text-white [&>button]:rounded-full",
        // Today: subtle ring, no fill
        today:
          "[&>button]:ring-2 [&>button]:ring-primary/40 [&>button]:ring-offset-0 [&>button]:font-semibold [&>button]:text-primary",
        outside:
          "day-outside [&>button]:text-muted-foreground [&>button]:opacity-40",
        disabled: "[&>button]:text-muted-foreground [&>button]:opacity-30 [&>button]:cursor-not-allowed [&>button]:hover:bg-transparent [&>button]:hover:text-muted-foreground",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...rest }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" {...rest} />
          ) : (
            <ChevronRight className="h-4 w-4" {...rest} />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
