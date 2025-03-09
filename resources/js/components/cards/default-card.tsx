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
import { router, usePage } from "@inertiajs/react"
import { Auth, Course, SharedData } from "@/types"
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
    item: any,
    titleConfirm?: string,
    descriptionConfirm?: string,
    updateURL: string;
    deleteURL: string;
    formTypeValues:any
    inputOptions:any;
}

function ActionButtons({ updateURL, deleteURL, item, titleConfirm, descriptionConfirm ,formTypeValues,inputOptions}: ActionButtonsProps) {
    const { is_confirmed } = usePage<SharedData>().props.auth;
    const [open, setOpen] = useState(false);
    const handleDelete = () => {
        router.post(deleteURL, {}, { preserveScroll: true })
    }
    return (
        <CardFooter className="flex gap-5">

            <DefaultFormDialog
                title={'Edit '}
                description="Click save when you're done."
                buttonText='Save'
                inputOptions={inputOptions}
                formTypeValues={formTypeValues}
                uri={updateURL}
                messagesSuccess='Your item has been successfully updated.'
                variant={'outline'}
            >
                <Edit2Icon /> Edit
            </DefaultFormDialog>

            <Button onClick={() => {
                if (!is_confirmed) {
                    router.post(deleteURL, {}, { preserveScroll: true })
                }
                if (is_confirmed) {
                    setOpen(true)
                }
            }} variant={'destructive'} className="w-full">
                <Trash2Icon /> Delete
            </Button>
            {open && <ConfirmDialog isOpen={open} title={titleConfirm ? titleConfirm : '"Are you sure you want to delete this?"'}
                description={descriptionConfirm ? descriptionConfirm : "This will be deleted permanently."}
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

