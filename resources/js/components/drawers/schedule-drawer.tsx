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

    console.log(schedule);
    return (
        <Drawer {...props}>

            <DrawerContent className="">

                <DrawerHeader className="text-left">
                    <DrawerTitle>{schedule.title}</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DrawerDescription>

                </DrawerHeader>
                <div className="p-5 ">
                    <DrawerDescription className="flex flex-col">
                        <span> {schedule.extendedProps.date} </span>
                        <span>   <span>Start from :</span>
                            {schedule.extendedProps.start_time} - {schedule.extendedProps.end_time}</span>
                    </DrawerDescription>
                </div>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

