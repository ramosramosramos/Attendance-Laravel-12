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

interface CompoundFormDialogProps {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
    children: any

}
export function CompoundFormDialog({ openDialog, setOpenDialog, children }: CompoundFormDialogProps) {

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
CompoundFormDialog.Header = Header;
CompoundFormDialog.Title = Title;
CompoundFormDialog.Description = Description;

//Usage information
CompoundFormDialog.Form = Form;
CompoundFormDialog.Content = Content;
CompoundFormDialog.InputLabel = InputLabel;
CompoundFormDialog.InputField = InputField;
CompoundFormDialog.PrimaryButton = PrimaryButton;
CompoundFormDialog.InputErrorMessage = InputErrorMessage;


// how to use

    //   <CompoundFormDialog openDialog={openForm} setOpenDialog={setOpenForm}>
    //             <CompoundFormDialog.Header>
    //                 <CompoundFormDialog.Title>
    //                     Edit Course
    //                 </CompoundFormDialog.Title>
    //                 <CompoundFormDialog.Description>
    //                     Make changes to your course here. Click save when you're done.
    //                 </CompoundFormDialog.Description>
    //             </CompoundFormDialog.Header>
    //             <CompoundFormDialog.Form onSubmit={handleEdit} >
    //                 <CompoundFormDialog.Content>
    //                     <CompoundFormDialog.InputLabel htmlFor="name">
    //                         Name
    //                     </CompoundFormDialog.InputLabel>
    //                     <CompoundFormDialog.InputField defaultValue={data.name} onChange={(e) => setData('name', e.target.value)} id="name" />
    //                     <CompoundFormDialog.InputErrorMessage message={errors.name} />

    //                 </CompoundFormDialog.Content>
    //                 <CompoundFormDialog.Content>
    //                     <CompoundFormDialog.InputLabel htmlFor="code">
    //                         Course code
    //                     </CompoundFormDialog.InputLabel>
    //                     <CompoundFormDialog.InputField defaultValue={data.code} onChange={(e) => setData('code', e.target.value)} id="code" />
    //                     <CompoundFormDialog.InputErrorMessage message={errors.code} />
    //                 </CompoundFormDialog.Content>
    //                 <CompoundFormDialog.PrimaryButton disabled={processing}>
    //                     Save
    //                 </CompoundFormDialog.PrimaryButton>
    //             </CompoundFormDialog.Form>
    //         </CompoundFormDialog>
