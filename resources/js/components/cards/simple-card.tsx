import {Edit2Icon, Trash2Icon } from "lucide-react"

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
import { router } from "@inertiajs/react"




type CardProps = React.ComponentProps<typeof Card>

export function SimpleCard({ children, className, ...props }: CardProps) {
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

function ActionButtons({updateURL,deleteURL}: {updateURL:string,deleteURL:string}) {
    const [open,setOpen] = useState(false);

    const handleEdit = () => {
        console.log('edit')
    }
    const handleDelete = () => {
        router.post(deleteURL,{},{preserveScroll:true})
    }
    return (
        <CardFooter className="flex gap-5">
            <Button onClick={handleEdit} variant={'outline'} className="w-full">
                <Edit2Icon /> Edit        </Button>
            <Button onClick={()=>setOpen(true)} variant={'destructive'} className="w-full">
                <Trash2Icon /> Delete
            </Button>
            {open && <ConfirmDialog isOpen={open} title="Are you sure you want to delete this course?"
                description="This course will be deleted permanently."
                cancelOnClick={() => setOpen(false)}
                actionOnClick={handleDelete}
            />}
        </CardFooter>
    );
}

SimpleCard.Header = Header;
SimpleCard.Title = Title;
SimpleCard.Description = Description;
SimpleCard.ActionButtons = ActionButtons;
