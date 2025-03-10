
import InputError from '@/components/input-error';
import DefaultSelect from '@/components/inputs/default-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Schedule, ScheduleProps, SharedData, type BreadcrumbItem } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit schedule',
        href: route('schedules.edit', ""),
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
    course_name: string,
    subject_name: string,
    section_name: string,
    year_level_name: string,
    [key: string]: any;
    // :Date;
}
export default function Edit({ schedule, scheduleProps }: {schedule:Schedule, scheduleProps: ScheduleProps }) {
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
        course_name: schedule.course_name,
        subject_name: schedule.subject_name,
        section_name: schedule.section_name,
        year_level_name: schedule.year_level_name,
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('schedules.update', schedule.id), {
            preserveScroll: true,
            showProgress: false,
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

                            <div>
                                <Label isRequired htmlFor='course_name'>Course</Label>
                                <DefaultSelect defaultValue={data.course_name ?? ''} onValueChange={(e) => setData('course_name', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a course" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.courses && scheduleProps.courses.map((course, index) => (
                                            <DefaultSelect.Item key={index} value={course.name}>
                                                {course.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.course_name} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='subject_name'>Subject</Label>
                                <DefaultSelect defaultValue={data.subject_name ?? ''} onValueChange={(e) => setData('subject_name', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a subject" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.subjects && scheduleProps.subjects.map((subject, index) => (
                                            <DefaultSelect.Item key={index} value={subject.name}>
                                                {subject.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.subject_name} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='section_name'>Section</Label>
                                <DefaultSelect defaultValue={data.section_name ?? ''} onValueChange={(e) => setData('section_name', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a section" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.sections && scheduleProps.sections.map((section, index) => (
                                            <DefaultSelect.Item key={index} value={section.name}>
                                                {section.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.section_name} />
                            </div>
                            <div>
                                <Label isRequired htmlFor='year_level_name'>Year level</Label>
                                <DefaultSelect defaultValue={data.year_level_name ?? ''} onValueChange={(e) => setData('year_level_name', e)} >
                                    <DefaultSelect.Trigger>
                                        <DefaultSelect.Value placeholder="Select a year level" />
                                    </DefaultSelect.Trigger>
                                    <DefaultSelect.Content>
                                        {scheduleProps.year_levels && scheduleProps.year_levels.map((year_level, index) => (
                                            <DefaultSelect.Item key={index} value={year_level.name}>
                                                {year_level.name}
                                            </DefaultSelect.Item>
                                        ))}
                                    </DefaultSelect.Content>
                                </DefaultSelect>
                                <InputError message={errors.year_level_name} />
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
