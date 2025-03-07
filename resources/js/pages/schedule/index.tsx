
import { CalendarScheduler } from '@/components/scheduler/calendar-scheduler';
import AppLayout from '@/layouts/app-layout';
import { Schedule, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Schedule',
        href: '/schedules',
    },
];

export default function Index({schedules}:Schedule) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schedule" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                  <CalendarScheduler schedules={schedules}/>


                </div>
            </div>
        </AppLayout>
    );
}
