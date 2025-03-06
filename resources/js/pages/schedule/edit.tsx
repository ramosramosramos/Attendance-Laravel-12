
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Schedule, SharedData, type BreadcrumbItem } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit schedule',
        href: route('schedules.edit',""),
    },
];

interface FormEdit {
    title: string;
    user_id: number;
    description: string;
    start_time: string;
    end_time: string;
    date: string;
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    [key: string]: any;
    // :Date;
}
export default function Edit({schedule}:Schedule) {
    const { user } = usePage<SharedData>().props.auth;

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm<FormEdit>({
        title: schedule.title,
        user_id: user.id,
        description: schedule.description,
        start_time: schedule.start_time,
        end_time: schedule.end_time,
        date: schedule.start_time,
        backgroundColor: schedule.backgroundColor,
        borderColor: schedule.borderColor,
        textColor: schedule.textColor,
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('schedules.update',schedule.id), {
            preserveScroll: true,
            showProgress:false,
            onSuccess: () => {
                toast.success("Your schedule has been successfully save.")
                setTimeout(() => {
                    router.get(route('schedules.index'));
                }, 1000);
                clearErrors();
                reset();
            }
        })
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schedule - Edit" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">

                    <form onSubmit={handleSubmit} className='p-5 grid lg:grid-cols-2  gap-5'>

                        <section className='space-y-5'>
                            <div>
                                <Label isRequired htmlFor='title'>Title  </Label>
                                <Input className='w-full' value={data.title} onChange={(e) => setData('title', e.target.value)
                                }
                                    type="text"
                                />
                                <InputError message={errors.title} />
                            </div>
                            <div>
                                <Label htmlFor='description'>Description</Label>
                                <Textarea className='w-full' value={data.description} onChange={(e) => setData('description', e.target.value)
                                }

                                />
                                <InputError message={errors.description} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='start_time'>Start time</Label>
                                <Input className='w-full' value={data.start_time} onChange={(e) => {
                                    setData('start_time', e.target.value)
                                    setData('date', e.target.value)

                                }}
                                    type="datetime-local"
                                />
                                <InputError message={errors.start_time} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='end_time'>End time</Label>
                                <Input className='w-full' value={data.end_time} onChange={(e) => {
                                    setData('end_time', e.target.value)
                                    setData('date', e.target.value)
                                }}
                                    type="datetime-local"
                                />
                                <InputError message={errors.end_time} />
                            </div>
                        </section>

                        <section className='space-y-5'>
                            <div>
                                <Label htmlFor='backgroundColor'>Background color  </Label>
                                <Input className='w-full' value={data.backgroundColor} onChange={(e) => setData('backgroundColor', e.target.value)
                                }
                                    type="color"
                                />
                                <InputError message={errors.backgroundColor} />
                            </div>
                            <div>
                                <Label htmlFor='borderColor'>Border color  </Label>
                                <Input className='w-full' value={data.borderColor} onChange={(e) => setData('borderColor', e.target.value)
                                }
                                    type="color"
                                />
                                <InputError message={errors.borderColor} />
                            </div>
                            <div>
                                <Label htmlFor='textColor'>Text color  </Label>
                                <Input className='w-full' value={data.textColor} onChange={(e) => setData('textColor', e.target.value)
                                }
                                    type="color"
                                />
                                <InputError message={errors.textColor} />
                            </div>
                        </section>
                        <Button disabled={processing} className='max-w-[max-content]'>Save</Button>
                    </form>

                </div>
            </div>
        </AppLayout>
    );
}
