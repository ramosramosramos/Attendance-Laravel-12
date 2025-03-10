
import InputError from '@/components/input-error';
import DefaultSelect from '@/components/inputs/default-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { ScheduleForm, ScheduleProps, SharedData, type BreadcrumbItem } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create schedule',
        href: route('schedules.create'),
    },
];


export default function Create({ scheduleProps }: { scheduleProps: ScheduleProps }) {
    const { user } = usePage<SharedData>().props.auth;

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm<ScheduleForm>({
        title: '',
        user_id: user.id,
        description: '',
        start_time: '',
        end_time: '',
        date: '',
        backgroundColor: '#8A2BE2',
        borderColor: '#FAEBD7',
        textColor: '#FAEBD7',
        course_id: '',
        subject_id: '',
        section_id: '',
        year_level_id: '',
        room_id: '',
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('schedules.store'), {
            preserveScroll: true,
            showProgress: false,
            onSuccess: () => {
                toast.success("Your new schedule has been successfully added.")
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
            <Head title="Schedule - Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">

                    <form onSubmit={handleSubmit} className=' p-5 grid lg:grid-cols-2  gap-5 '>

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
                            <div>
                                <Label isRequired htmlFor='course_id'>Course</Label>
                                <DefaultSelect defaultValue={data.course_id ?? ''} onValueChange={(e) => setData('course_id', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a course" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.courses && scheduleProps.courses.map((course, index) => (
                                            <DefaultSelect.Item key={index} value={String(course.id)}>
                                             {course.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.course_id} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='subject_id'>Subject</Label>
                                <DefaultSelect defaultValue={data.subject_id ?? ''} onValueChange={(e) => setData('subject_id', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a subject" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.subjects && scheduleProps.subjects.map((subject, index) => (
                                            <DefaultSelect.Item key={index} value={String(subject.id)}>
                                             {subject.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.subject_id} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='section_id'>Section</Label>
                                <DefaultSelect defaultValue={data.section_id ?? ''} onValueChange={(e) => setData('section_id', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a section" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.sections && scheduleProps.sections.map((section, index) => (
                                            <DefaultSelect.Item key={index} value={String(section.id)}>
                                             {section.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.section_id} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='year_level_id'>Year level</Label>
                                <DefaultSelect defaultValue={data.year_level_id ?? ''} onValueChange={(e) => setData('year_level_id', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a year level" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.year_levels && scheduleProps.year_levels.map((year_level, index) => (
                                            <DefaultSelect.Item key={index} value={String(year_level.id)}>
                                             {year_level.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.year_level_id} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='room_id'>Room</Label>
                                <DefaultSelect defaultValue={data.room_id ?? ''} onValueChange={(e) => setData('room_id', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a room" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.rooms && scheduleProps.rooms.map((room, index) => (
                                            <DefaultSelect.Item key={index} value={String(room.id)}>
                                             {room.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.room_id} />
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
                        <Button disabled={processing} className='max-w-[max-content]'>Add this new schedule</Button>
                    </form>

                </div>
            </div>
        </AppLayout>
    );
}
