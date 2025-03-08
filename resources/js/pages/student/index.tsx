

import AppLayout from '@/layouts/app-layout';
import { Meta, Student, type BreadcrumbItem } from '@/types';
import { Head, WhenVisible } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Students',
        href: '/students',
    },
];

interface StudentProps{
    data:Student[];
    meta:Meta;
}
export default function Index({students}:{students:StudentProps}) {

    console.log(students.meta.links);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Students" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">

                </div>
            </div>
        </AppLayout>
    );
}
