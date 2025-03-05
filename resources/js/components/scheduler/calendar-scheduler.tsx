import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
const events = [
    { id:1, title: 'event 1as asd asdasd', date: '2025-04-01'},
    { id:2,title: 'event 2', date: '2025-04-02'}
]


const handleDateClick = (arg:any) => {
    console.log(arg.event);
}

export function CalendarScheduler() {
    return (
        <div className='p-5'>

            <FullCalendar

                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                
                events={events}
                eventClick={handleDateClick}
                eventContent={renderEventContent}
            />
        </div>
    )
}

// a custom render function
function renderEventContent(eventInfo: any) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}
