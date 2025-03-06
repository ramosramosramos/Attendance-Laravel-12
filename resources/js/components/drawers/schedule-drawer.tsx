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
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Schedule } from "@/types";

export function ScheduleDrawer({ schedule, ...props }: React.ComponentPropsWithoutRef<typeof Drawer> & { schedule: Schedule }) {


    return (
        <Drawer {...props}>

            <DrawerContent className="">

                <DrawerHeader className="text-left">
                    <DrawerTitle>{schedule.title}</DrawerTitle>
                    <DrawerDescription>
                        {schedule.extendedProps.description}
                    </DrawerDescription>

                </DrawerHeader>
                <div className="p-10 ">
                    <DrawerDescription className="flex flex-col">
                        <span> {schedule.extendedProps.date} </span>
                        <span>   <span>Start from :</span>
                            {schedule.extendedProps.start_time} - {schedule.extendedProps.end_time}</span>
                    </DrawerDescription>
                </div>
                <DrawerFooter className="pt-2  ">
                    <div className="flex  mb-5  gap-5 w-full">
                        <Button variant={'default'}>
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

