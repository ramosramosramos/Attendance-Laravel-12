"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarScheduler() {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([

  ]);

  console.log(selectedDates);
  return (
    <div className="p-4">
      <Calendar
        mode="multiple"
        selected={selectedDates}
        // onSelect={(days) => setSelectedDates(days ?? [])} // Updates selected dates
        className="rounded-md border"
      />
      <div className="mt-4 p-2 border rounded">
        <h3 className="font-semibold">Scheduled Dates:</h3>
        <ul>
          {selectedDates.length > 0 ? (
            selectedDates.map((date, index) => (
              <li key={index}>{date.toDateString()}</li>
            ))
          ) : (
            <li className="text-gray-500">No dates selected</li>
          )}
        </ul>
      </div>
    </div>
  );
}
