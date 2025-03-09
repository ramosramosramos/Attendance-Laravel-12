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
import { router, useForm } from "@inertiajs/react"

import * as React from "react"


import { FormDialog } from "../dialogs/form-dialog"
import { Course } from "@/types"
import { toast } from "sonner"



type CardProps = React.ComponentProps<typeof Card>

export function CourseCard({ children, className, ...props }: CardProps) {
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

function ActionButtons({ updateURL, deleteURL, course }: { updateURL: string, deleteURL: string, course: Course }) {
    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);

    const { data, setData, processing, errors, reset, post } = useForm({
        name: course.name,
        code: course.code,
    });
    const handleEdit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(updateURL, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Your course has been successfully updated.")
                reset();
                setTimeout(() => {
                    setOpenForm(false)
                }, 1000);
            }
        },);

    }
    const handleDelete = () => {
        router.post(deleteURL, {}, { preserveScroll: true })
    }
    return (
        <CardFooter className="flex gap-5">

            <FormDialog openDialog={openForm} setOpenDialog={setOpenForm}>
                <FormDialog.Header>
                    <FormDialog.Title>
                        Edit Course
                    </FormDialog.Title>
                    <FormDialog.Description>
                        Make changes to your course here. Click save when you're done.
                    </FormDialog.Description>
                </FormDialog.Header>
                <FormDialog.Form onSubmit={handleEdit} >
                    <FormDialog.Content>
                        <FormDialog.InputLabel htmlFor="name">
                            Name
                        </FormDialog.InputLabel>
                        <FormDialog.InputField defaultValue={data.name} onChange={(e) => setData('name', e.target.value)} id="name" />
                        <FormDialog.InputErrorMessage message={errors.name} />

                    </FormDialog.Content>
                    <FormDialog.Content>
                        <FormDialog.InputLabel htmlFor="code">
                            Course code
                        </FormDialog.InputLabel>
                        <FormDialog.InputField defaultValue={data.code} onChange={(e) => setData('code', e.target.value)} id="code" />
                        <FormDialog.InputErrorMessage message={errors.code} />
                    </FormDialog.Content>
                    <FormDialog.PrimaryButton disabled={processing}>
                        Save
                    </FormDialog.PrimaryButton>
                </FormDialog.Form>
            </FormDialog>

            <Button onClick={() => setOpenForm(true)} variant={'outline'} className="w-full">
                <Edit2Icon /> Edit        </Button>
            <Button onClick={() => setOpen(true)} variant={'destructive'} className="w-full">
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

CourseCard.Header = Header;
CourseCard.Title = Title;
CourseCard.Description = Description;
CourseCard.ActionButtons = ActionButtons;

