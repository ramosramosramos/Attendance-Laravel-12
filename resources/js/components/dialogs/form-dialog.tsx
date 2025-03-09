import * as React from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import InputError from "../input-error"

interface FormDialogPops {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
    children: any

}
export function FormDialog({ openDialog, setOpenDialog, children }: FormDialogPops) {

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="sm:max-w-[425px]">
                {children}
                {/* <ProfileForm /> */}
            </DialogContent>
        </Dialog>
    )
}

function Header({ children }: any) {
    return (
        <DialogHeader>{children}</DialogHeader>
    );
}
function Title({ children }: any) {
    return (
        <DialogTitle>{children}</DialogTitle>
    );
}
function Description({ children }: any) {
    return (
        <DialogDescription>{children}</DialogDescription>
    );
}

function Form({ className, children, ...props }: React.ComponentProps<"form">) {
    return (
        <form {...props} className={cn("grid items-start gap-4", className)}>

            {children}
        </form>
    )
}
function Content({ className, children }: React.ComponentProps<"div">) {
    return (

        <div className={cn('grid gap-2', className)}>
            {children}
        </div>

    )
}
function InputLabel({ children, className }: React.ComponentProps<typeof Label>) {
    return (

        <Label className={className}>{children}</Label>

    )
}
function InputField({ className, ...props }: React.ComponentProps<typeof Input>) {
    return (
        <Input className={className} {...props} />
    )
}
function InputErrorMessage({ className, ...props }: React.ComponentProps<typeof InputError>) {
    return (
        <InputError {...props} />
    )
}
function PrimaryButton({ children, className, ...props }: React.ComponentProps<typeof Button>) {
    return (
        <Button className={className} {...props} >
            {children}
        </Button>
    )
}
FormDialog.Header = Header;
FormDialog.Title = Title;
FormDialog.Description = Description;

//Usage information
FormDialog.Form = Form;
FormDialog.Content = Content;
FormDialog.InputLabel = InputLabel;
FormDialog.InputField = InputField;
FormDialog.PrimaryButton = PrimaryButton;
FormDialog.InputErrorMessage = InputErrorMessage;


// how to use

    //   <FormDialog openDialog={openForm} setOpenDialog={setOpenForm}>
    //             <FormDialog.Header>
    //                 <FormDialog.Title>
    //                     Edit Course
    //                 </FormDialog.Title>
    //                 <FormDialog.Description>
    //                     Make changes to your course here. Click save when you're done.
    //                 </FormDialog.Description>
    //             </FormDialog.Header>
    //             <FormDialog.Form onSubmit={handleEdit} >
    //                 <FormDialog.Content>
    //                     <FormDialog.InputLabel htmlFor="name">
    //                         Name
    //                     </FormDialog.InputLabel>
    //                     <FormDialog.InputField defaultValue={data.name} onChange={(e) => setData('name', e.target.value)} id="name" />
    //                     <FormDialog.InputErrorMessage message={errors.name} />

    //                 </FormDialog.Content>
    //                 <FormDialog.Content>
    //                     <FormDialog.InputLabel htmlFor="code">
    //                         Course code
    //                     </FormDialog.InputLabel>
    //                     <FormDialog.InputField defaultValue={data.code} onChange={(e) => setData('code', e.target.value)} id="code" />
    //                     <FormDialog.InputErrorMessage message={errors.code} />
    //                 </FormDialog.Content>
    //                 <FormDialog.PrimaryButton disabled={processing}>
    //                     Save
    //                 </FormDialog.PrimaryButton>
    //             </FormDialog.Form>
    //         </FormDialog>
