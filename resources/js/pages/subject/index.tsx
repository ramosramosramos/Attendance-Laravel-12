
import { DefaultCard } from '@/components/cards/default-card';
import DefaultFormDialog from '@/components/forms/default-form-dialog';
import LinearLoading from '@/components/loadings/linear-loading';
import AppLayout from '@/layouts/app-layout';
import { Course, Subject, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Subjects',
        href: '/subjects',
    },
];


export default function Index({ subjects }: { subjects: Subject[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Subjects" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <DefaultFormDialog
                        title='Create subjects'
                        description="Use this to create subject. Click 'Create' when you're done."
                        buttonText='Create'
                        inputOptions={[{ name: 'name', label: 'Name', }]}
                        formTypeValues={{ name: '',}}
                        uri={route('subjects.store')}
                        messagesSuccess='Your new subject has been successfully added.'
                    >
                        <PlusIcon /> Create new subject
                    </DefaultFormDialog>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <LinearLoading data={subjects}>
                        <section className='p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                            {subjects.length > 0 && subjects.map((subject) => (
                                <DefaultCard key={subject.id}>
                                    <DefaultCard.Header>
                                        <DefaultCard.Description>
                                            {subject.name}
                                        </DefaultCard.Description>
                                    </DefaultCard.Header>
                                    <DefaultCard.ActionButtons
                                     inputOptions={[{ name: 'name', label: 'Name'}]}
                                        formTypeValues={{ name: subject.name }}
                                        titleConfirm='Are you sure you want to delete this subject?'
                                        descriptionConfirm='This subject will be deleted permanently.'
                                        item={subject} deleteURL={subject.deleteURL} updateURL={subject.updateURL} />
                                </DefaultCard>
                            ))}
                        </section>
                    </LinearLoading>


                </div>
            </div>
        </AppLayout>
    );
}
