import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Schedule } from '@/types'
import { ScheduleDrawer } from '../drawers/schedule-drawer'
import { useState } from 'react'
import { EventClickArg, EventDropArg } from '@fullcalendar/core/index.js'
import { EventImpl } from '@fullcalendar/core/internal'
import { router, useForm } from '@inertiajs/react'


export function CalendarScheduler({ schedules }: { schedules: Schedule[] }) {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule | EventImpl | null>(null);
    const handleDateClick = (arg: EventClickArg) => {
        setOpen(true);
        setSelectedSchedule(arg?.event);

    }

    const handleDrag = (arg: EventDropArg) => {
        router.post(route('schedules.drag', arg.event.id), { date: arg.event.start }, { preserveScroll: true });
    }
    return (
        <div className='p-5'>
            <FullCalendar

                customButtons={{

                    createButton: {
                        text: "Add new schedule",

                        click: () => {
                            router.get(route('schedules.create'));
                        },
                    },

                }}
                headerToolbar={{
                    start:'createButton',
                    left: 'createButton prev next today',
                    right: 'title',
                    // right: ''
                }}
                editable
                eventDrop={handleDrag}
                height={'90vh'}
                // contentHeight={200}
                expandRows
                plugins={[dayGridPlugin, interactionPlugin]}
                // initialView='dayGridMonth'
                events={schedules}
                eventClick={handleDateClick}
            />
            {selectedSchedule && <ScheduleDrawer schedule={selectedSchedule} open={open} onOpenChange={setOpen} />}
        </div>
    )
}

