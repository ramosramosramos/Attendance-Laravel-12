import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Schedule } from '@/types'
import { ScheduleDrawer } from '../drawers/schedule-drawer'
import { useState } from 'react'


export function CalendarScheduler({ schedules }: { schedules: Schedule[] }) {

    const [open,setOpen] =useState<boolean>(false);
    const [selectedSchedule,setSelectedSchedule] =useState<Schedule[]>([]);
    const handleDateClick = (arg: any) => {
        setOpen(true);
        setSelectedSchedule(arg.event);
        console.log(selectedSchedule);
    }


    return (
        <div className='p-5'>

            <FullCalendar
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: ''
                }}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                events={schedules}
                eventClick={handleDateClick}

            />
            <ScheduleDrawer schedule ={selectedSchedule} open={open} onOpenChange={setOpen} />
        </div>
    )
}

