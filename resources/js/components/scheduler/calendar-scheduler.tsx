import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
const events = [
    { id: 1, title: 'event 1as asd asdasd', date: '2025-04-02',backgroundColor: 'red', borderColor: 'green',textColor:'black', end:todayStr,url:'' },
    { id: 2, title: 'event 2', date: '2025-04-02' ,url:''}
]


const handleDateClick = (arg: any) => {
    console.log(arg?.event);
}

export function CalendarScheduler() {
    return (
        <div className='p-5'>

            <FullCalendar
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right:''
              }}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                events={events}
                eventClick={handleDateClick}

            />

        </div>
    )
}

