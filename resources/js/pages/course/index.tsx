
import { SimpleCard } from '@/components/cards/simple-card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Course, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Courses',
        href: '/courses',
    },
];


export default function Index({ courses }: { courses: Course[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Courses" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">

                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <section className='p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                        {courses.length > 0 && courses.map((course) => (
                            <SimpleCard key={course.id}>

                                <SimpleCard.Header>
                                    <SimpleCard.Title>
                                        {course.code}
                                    </SimpleCard.Title>

                                    <SimpleCard.Description>
                                       {course.name}
                                    </SimpleCard.Description>

                                </SimpleCard.Header>
                                <SimpleCard.ActionButtons deleteURL={course.deleteURL} updateURL={course.updateURL} />
                            </SimpleCard>
                        ))}
                    </section>

                </div>
            </div>
        </AppLayout>
    );
}
