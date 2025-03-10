

import { StudentCard } from '@/components/cards/student-card';
import LinearLoading from '@/components/loadings/linear-loading';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Meta, Student, type BreadcrumbItem } from '@/types';
import { Head, WhenVisible } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Students',
        href: '/students',
    },
];


export default function Index({students}:{students:{data:Student[]}}) {


    return (
             <AppLayout breadcrumbs={breadcrumbs}>
                   <Head title="Sections" />
                   <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                       <div className="">
                        <Button variant={'outline'}>Add new student</Button>
                       </div>
                       <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                           <LinearLoading data={students}>
                               <div className='p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                                   {students.data.length > 0 && students.data.map((student) => (
                                       <StudentCard key={student.id}>
                                           <StudentCard.Header>
                                               <StudentCard.Title>
                                                   {student.name}
                                               </StudentCard.Title>
                                               <StudentCard.Description>
                                                   {student.course_name}
                                               </StudentCard.Description>
                                               <StudentCard.Description>
                                                 Section:  {student.section_name}
                                               </StudentCard.Description>
                                               <StudentCard.Description>
                                                  {student.year_level_name}
                                               </StudentCard.Description>
                                           </StudentCard.Header>
                                        <StudentCard.ActionButtons editURL={student.editURL} deleteURL={student.deleteURL}/>
                                       </StudentCard>
                                   ))}
                               </div>
                           </LinearLoading>


                       </div>
                   </div>
               </AppLayout>
    );
}
