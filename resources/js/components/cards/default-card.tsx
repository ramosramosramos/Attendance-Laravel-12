import { Edit2Icon, Trash2Icon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useState } from "react"
import { ConfirmDialog } from "../dialogs/confirm-dialog"
import * as React from "react"
import { router } from "@inertiajs/react"
import { Course } from "@/types"
import DefaultFormDialog from "../forms/default-form-dialog"

type CardProps = React.ComponentProps<typeof Card>
export function DefaultCard({ children, className, ...props }: CardProps) {
    return (
        <Card className={cn("", className)} {...props}>

            {children}
        </Card>
    )
}

function Title({ children }: any) {
    return (
        <CardTitle>
            {children}
        </CardTitle>
    );
}
function Description({ children }: any) {
    return (
        <CardDescription>
            {children}
        </CardDescription>
    );
}
function Header({ children }: any) {
    return (
        <CardHeader>
            {children}
        </CardHeader>
    );
}
interface ActionButtonsProps {
    course: Course,
    titleConfirm?: string,
    descriptionConfirm?: string,
    updateURL: string;
    deleteURL: string;
}

function ActionButtons({ updateURL, deleteURL, course, titleConfirm, descriptionConfirm }: ActionButtonsProps) {
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        router.post(deleteURL, {}, { preserveScroll: true })
    }
    return (
        <CardFooter className="flex gap-5">

            <DefaultFormDialog
                title='Edit course'
                description="  Make changes to your course here. Click save when you're done."
                buttonText='Save'
                inputOptions={[{ name: 'name', label: 'Name', }, { name: 'code', label: 'Code', }]}
                formTypeValues={{ name: course.name, code: course.code }}
                uri={updateURL}
                messagesSuccess='Your course has been successfully updated.'
                variant={'outline'}
            >
                <Edit2Icon /> Edit
            </DefaultFormDialog>

            <Button onClick={() => setOpen(true)} variant={'destructive'} className="w-full">
                <Trash2Icon /> Delete
            </Button>
            {open && <ConfirmDialog isOpen={open} title={titleConfirm?titleConfirm:'"Are you sure you want to delete this?"'}
                description={descriptionConfirm?descriptionConfirm:"This will be deleted permanently."}
                cancelOnClick={() => setOpen(false)}
                actionOnClick={handleDelete}
            />}
        </CardFooter>
    );
}


DefaultCard.Header = Header;
DefaultCard.Title = Title;
DefaultCard.Description = Description;
DefaultCard.ActionButtons = ActionButtons;

