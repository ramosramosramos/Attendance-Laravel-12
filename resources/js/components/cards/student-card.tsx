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
export function StudentCard({ children, className, ...props }: CardProps) {
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
    titleConfirm?: string,
    descriptionConfirm?: string,
    editURL: string;
    deleteURL: string;
}

function ActionButtons({ editURL, deleteURL, titleConfirm, descriptionConfirm }: ActionButtonsProps) {
    const { is_confirmed } = usePage<SharedData>().props.auth;
    const [open, setOpen] = useState(false);
    const handleDelete = () => {
        router.post(deleteURL, {}, { preserveScroll: true })
    }
    return (
        <CardFooter className="flex gap-5 justify-end">

            <Button  onClick={() => {
                if (!is_confirmed) {
                    router.post(deleteURL, {}, { preserveScroll: true })
                }
                if (is_confirmed) {
                    setOpen(true)
                }
            }} variant={'destructive'} className="w-[max-content]" title="Delete">
                {/* //delete */}
                <Trash2Icon />
            </Button>
            {open && <ConfirmDialog isOpen={open} title={titleConfirm ? titleConfirm : '"Are you sure you want to delete this?"'}
                description={descriptionConfirm ? descriptionConfirm : "This will be deleted permanently."}
                cancelOnClick={() => setOpen(false)}
                actionOnClick={handleDelete}
            />}
        </CardFooter>
    );
}


StudentCard.Header = Header;
StudentCard.Title = Title;
StudentCard.Description = Description;
StudentCard.ActionButtons = ActionButtons;

