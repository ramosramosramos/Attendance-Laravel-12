
import InputError from '@/components/input-error';
import DefaultSelect from '@/components/inputs/default-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create student',
        href: route('students.create'),
    },
];


export default function Create({ studentProps }: { studentProps: any }) {
    const { user } = usePage<SharedData>().props.auth;

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm<any>({
        name: '',
        user_id: user.id,

        course_id: '',
        subject_id: '',
        section_id: '',
        year_level_id: '',

    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('students.store'), {
            preserveScroll: true,
            showProgress: false,
            onSuccess: () => {
                toast.success("Your new student has been successfully added.")
                setTimeout(() => {
                    router.get(route('students.index'));
                }, 1000);
                clearErrors();
                reset();
            }
        })

    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schedule - Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">

                    <form onSubmit={handleSubmit} className=' p-5 grid lg:grid-cols-2  gap-5 '>



                        <section className='space-y-5'>

                        </section>
                        <Button disabled={processing} className='max-w-[max-content]'>Add this new student</Button>
                    </form>

                </div>
            </div>
        </AppLayout>
    );
}
