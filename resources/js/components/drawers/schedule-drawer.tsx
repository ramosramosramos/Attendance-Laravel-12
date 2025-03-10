import * as React from "react"

import { Button } from "@/components/ui/button"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Schedule, SharedData } from "@/types";
import { EventImpl } from "@fullcalendar/core/internal";
import { router, useForm, usePage } from "@inertiajs/react";
import { ConfirmDialog } from "../dialogs/confirm-dialog";
import { toast } from "sonner";
import { useCalendarContext } from "@/hooks/use-calendar-context";

export function ScheduleDrawer({ schedule, ...props }: React.ComponentPropsWithoutRef<typeof Drawer> & { schedule: Schedule | EventImpl }) {
    const {is_confirmed} = usePage<SharedData>().props.auth;
    const [openConfirm, setOpenConfirm] = React.useState(false);
    const { open, setOpen } = useCalendarContext();
    const form = useForm({});
    return (
        <Drawer  {...props}>

            <DrawerContent className="">

                <DrawerHeader className="text-left">
                    <DrawerTitle className="space-x-1 text-4xl"><span>{schedule.title} </span></DrawerTitle>
                    <DrawerDescription>
                        {schedule.extendedProps.description} <br />
                    </DrawerDescription>
                    <DrawerDescription>
                        {<span> {schedule.extendedProps.date} </span>}
                    </DrawerDescription>

                </DrawerHeader>
                <div className="p-10 ">
                    <DrawerDescription className="flex flex-col">

                        <span>
                            <span className="text-3xl font-extrabold"> {schedule.extendedProps.course_name} </span>
                        </span>
                        <span>
                            <span className="text-"> Subject: {schedule.extendedProps.subject_name} </span>
                        </span>
                        <span>
                            <span className="text-"> Section: {schedule.extendedProps.section_name} </span>
                        </span>
                        <span>
                            <span className="text-"> Year level: {schedule.extendedProps.year_level_name} </span>
                        </span>
                        <span>
                            <span className="text-"> Room: {schedule.extendedProps.room_name} </span>
                        </span>

                        <span>   <span>Start from :</span>
                            <span className="text-green-500">   {schedule.extendedProps.start_time} </span> - <span className="text-green-500"> {schedule.extendedProps.end_time}</span>
                        </span>
                    </DrawerDescription>
                </div>
                <DrawerFooter className="pt-2  ">
                    <div className="flex  mb-5  gap-5 w-full">
                        <Button variant={'default'} onClick={() => {

                            form.get(route('schedules.edit', { schedule: schedule.id }), { preserveScroll: true });
                        }}>
                            Edit
                        </Button>
                        <Button variant={'destructive'} onClick={() =>{
                             if(!is_confirmed){
                                router.post(route('schedules.destroy', schedule.id));
                             }
                             if(is_confirmed){

                                 setOpenConfirm(true)
                             }
                             }} >
                            Delete
                        </Button>
                        {openConfirm && <ConfirmDialog isOpen={openConfirm}
                            title="Are you sure you want to delete this?"
                            description=" This schedule will be moved to the deleted schedules section. You can restore it later if needed."
                            cancelOnClick={() => setOpenConfirm(false)}
                            actionOnClick={() => router.post(route('schedules.destroy', schedule.id), {},
                                {
                                    preserveScroll: true,
                                    onSuccess: () => {
                                        toast.success('Successfully deleted.');
                                        setOpenConfirm(false);
                                        setOpen(false);
                                    }
                                })
                            }
                        />}
                    </div>
                    <DrawerClose className="self-end" asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

