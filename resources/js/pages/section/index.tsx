
import { DefaultCard } from '@/components/cards/default-card';
import DefaultFormDialog from '@/components/forms/default-form-dialog';
import LinearLoading from '@/components/loadings/linear-loading';
import AppLayout from '@/layouts/app-layout';
import { Section, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Sections',
        href: '/sections',
    },
];


export default function Index({ sections }: { sections: Section[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Sections" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <DefaultFormDialog
                        title='Create sections'
                        description="Use this to create section. Click 'Create' when you're done."
                        buttonText='Create'
                        inputOptions={[{ name: 'name', label: 'Name', }]}
                        formTypeValues={{ name: '',}}
                        uri={route('sections.store')}
                        messagesSuccess='Your new section has been successfully added.'
                    >
                        <PlusIcon /> Create new section
                    </DefaultFormDialog>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <LinearLoading data={sections}>
                        <section className='p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                            {sections.length > 0 && sections.map((section) => (
                                <DefaultCard key={section.id}>
                                    <DefaultCard.Header>
                                        <DefaultCard.Description>
                                            {section.name}
                                        </DefaultCard.Description>
                                    </DefaultCard.Header>
                                    <DefaultCard.ActionButtons
                                     inputOptions={[{ name: 'name', label: 'Name'}]}
                                        formTypeValues={{ name: section.name }}
                                        titleConfirm='Are you sure you want to delete this section?'
                                        descriptionConfirm='This section will be deleted permanently.'
                                        item={section} deleteURL={section.deleteURL} updateURL={section.updateURL} />
                                </DefaultCard>
                            ))}
                        </section>
                    </LinearLoading>


                </div>
            </div>
        </AppLayout>
    );
}
