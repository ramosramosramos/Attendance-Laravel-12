
import { DefaultCard } from '@/components/cards/default-card';
import DefaultFormDialog from '@/components/forms/default-form-dialog';
import LinearLoading from '@/components/loadings/linear-loading';
import AppLayout from '@/layouts/app-layout';
import { Course, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

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
                    <DefaultFormDialog
                        title='Create courses'
                        description="Use this to create course. Click 'Create' when you're done."
                        buttonText='Create'
                        inputOptions={[{ name: 'name', label: 'Name', }, { name: 'code', label: 'Code', }]}
                        formTypeValues={{ name: '', code: '' }}
                        uri={route('courses.store')}
                        messagesSuccess='Your new course has been successfully added.'
                    >
                        <PlusIcon /> Create new course
                    </DefaultFormDialog>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <LinearLoading data={courses}>
                        <section className='p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                            {courses.length > 0 && courses.map((course) => (
                                <DefaultCard key={course.id}>
                                    <DefaultCard.Header>
                                        <DefaultCard.Title>
                                            {course.code}
                                        </DefaultCard.Title>
                                        <DefaultCard.Description>
                                            {course.name}
                                        </DefaultCard.Description>
                                    </DefaultCard.Header>
                                    <DefaultCard.ActionButtons
                                        titleConfirm='Are you sure you want to delete this course?'
                                        descriptionConfirm='This course will be deleted permanently.'
                                        course={course} deleteURL={course.deleteURL} updateURL={course.updateURL} />
                                </DefaultCard>
                            ))}
                        </section>
                    </LinearLoading>


                </div>
            </div>
        </AppLayout>
    );
}
