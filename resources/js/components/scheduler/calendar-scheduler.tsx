import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Schedule } from "@/types";
import { ScheduleDrawer } from "../drawers/schedule-drawer";
import { useState } from "react";
import { EventClickArg, EventDropArg } from "@fullcalendar/core";
import { EventImpl } from "@fullcalendar/core/internal";
import { router } from "@inertiajs/react";
import { CalendarContext } from "@/hooks/use-calendar-context";



// Calendar component
export function CalendarScheduler({ schedules }: { schedules: Schedule[] }) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | EventImpl | null>(null);

  const handleEventClick = (arg: EventClickArg) => {
    setOpen(true);
    setSelectedSchedule(arg.event);
  };

  const handleDrag = (arg: EventDropArg) => {
    router.post(route("schedules.drag", arg.event.id), { date: arg.event.start }, { preserveScroll: true });
  };

  return (
    <CalendarContext.Provider value={{ open, setOpen }}>
      <div className="p-5">
        <FullCalendar
          customButtons={{
            createButton: {
              text: "Add new schedule",
              click: () => {
                router.get(route("schedules.create"));
              },
            },
          }}
          headerToolbar={{
            start: "createButton",
            left: "createButton prev next today",
            right: "title",
          }}
          editable
          eventDrop={handleDrag}
          height={"90vh"}
          expandRows
          plugins={[dayGridPlugin, interactionPlugin]}
          events={schedules}
          eventClick={handleEventClick}
        />

        {selectedSchedule && <ScheduleDrawer open={open} onOpenChange={setOpen} schedule={selectedSchedule} />}
      </div>
    </CalendarContext.Provider>
  );
}
