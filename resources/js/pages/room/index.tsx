
import { DefaultCard } from '@/components/cards/default-card';
import DefaultFormDialog from '@/components/forms/default-form-dialog';
import LinearLoading from '@/components/loadings/linear-loading';
import AppLayout from '@/layouts/app-layout';
import { Room, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Rooms',
        href: '/rooms',
    },
];


export default function Index({ rooms }: { rooms: Room[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Rooms" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <DefaultFormDialog
                        title='Create rooms'
                        description="Use this to create room. Click 'Create' when you're done."
                        buttonText='Create'
                        inputOptions={[{ name: 'name', label: 'Name', }]}
                        formTypeValues={{ name: '',}}
                        uri={route('rooms.store')}
                        messagesSuccess='Your new room has been successfully added.'
                    >
                        <PlusIcon /> Create new room
                    </DefaultFormDialog>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <LinearLoading data={rooms}>
                        <section className='p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                            {rooms.length > 0 && rooms.map((room) => (
                                <DefaultCard key={room.id}>
                                    <DefaultCard.Header>
                                        <DefaultCard.Description>
                                            {room.name}
                                        </DefaultCard.Description>
                                    </DefaultCard.Header>
                                    <DefaultCard.ActionButtons
                                     inputOptions={[{ name: 'name', label: 'Name'}]}
                                        formTypeValues={{ name: room.name }}
                                        titleConfirm='Are you sure you want to delete this room?'
                                        descriptionConfirm='This room will be deleted permanently.'
                                        item={room} deleteURL={room.deleteURL} updateURL={room.updateURL} />
                                </DefaultCard>
                            ))}
                        </section>
                    </LinearLoading>


                </div>
            </div>
        </AppLayout>
    );
}
