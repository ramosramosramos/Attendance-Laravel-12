
import { DefaultCard } from '@/components/cards/default-card';
import DefaultFormDialog from '@/components/forms/default-form-dialog';
import LinearLoading from '@/components/loadings/linear-loading';
import AppLayout from '@/layouts/app-layout';
import { Section, YearLevel, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Year Levels',
        href: '/year_levels',
    },
];


export default function Index({ year_levels }: { year_levels: YearLevel[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Year Levels" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <DefaultFormDialog
                        title='Create year_levels'
                        description="Use this to create year level. Click 'Create' when you're done."
                        buttonText='Create'
                        inputOptions={[{ name: 'name', label: 'Name', }]}
                        formTypeValues={{ name: '',}}
                        uri={route('year_levels.store')}
                        messagesSuccess='Your new year level has been successfully added.'
                    >
                        <PlusIcon /> Create new year level
                    </DefaultFormDialog>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <LinearLoading data={year_levels}>
                        <section className='p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                            {year_levels.length > 0 && year_levels.map((year_level) => (
                                <DefaultCard key={year_level.id}>
                                    <DefaultCard.Header>
                                        <DefaultCard.Description>
                                            {year_level.name}
                                        </DefaultCard.Description>
                                    </DefaultCard.Header>
                                    <DefaultCard.ActionButtons
                                     inputOptions={[{ name: 'name', label: 'Name'}]}
                                        formTypeValues={{ name: year_level.name }}
                                        titleConfirm='Are you sure you want to delete this year level?'
                                        descriptionConfirm='This year_level will be deleted permanently.'
                                        item={year_level} deleteURL={year_level.deleteURL} updateURL={year_level.updateURL} />
                                </DefaultCard>
                            ))}
                        </section>
                    </LinearLoading>


                </div>
            </div>
        </AppLayout>
    );
}
