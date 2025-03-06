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
import { Schedule } from "@/types";
import { EventImpl } from "@fullcalendar/core/internal";
import { useForm } from "@inertiajs/react";

export function ScheduleDrawer({ schedule, ...props }: React.ComponentPropsWithoutRef<typeof Drawer> & { schedule: Schedule | EventImpl }) {

    const form = useForm({});
    return (
        <Drawer {...props}>

            <DrawerContent className="">

                <DrawerHeader className="text-left">
                    <DrawerTitle className="space-x-1"><span>{schedule.title} </span>( {<span> {schedule.extendedProps.date} </span>})</DrawerTitle>
                    <DrawerDescription>
                        {schedule.extendedProps.description}
                    </DrawerDescription>

                </DrawerHeader>
                <div className="p-10 ">
                    <DrawerDescription className="flex flex-col">

                        <span>   <span>Start from :</span>
                            {schedule.extendedProps.start_time} - {schedule.extendedProps.end_time}</span>
                    </DrawerDescription>
                </div>
                <DrawerFooter className="pt-2  ">
                    <div className="flex  mb-5  gap-5 w-full">
                        <Button variant={'default'} onClick={() => {

                            form.get(route('schedules.edit', { schedule: schedule.id }), { preserveScroll: true });


                        }}>
                            Edit
                        </Button>
                        <Button variant={'destructive'}>
                            Delete
                        </Button>
                    </div>
                    <DrawerClose className="self-end" asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

