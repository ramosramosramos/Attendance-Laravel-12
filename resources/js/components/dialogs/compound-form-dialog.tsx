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
// default-form-dialog.tsx
// default-form-dialog.tsx

//   import { useState } from "react";
//   import { CompoundFormDialog } from "../dialogs/compound-form-dialog";
//   import { useForm } from "@inertiajs/react";
//   import { toast } from "sonner";
//   import { Button } from "../ui/button";
//   import { cn } from "@/lib/utils";
//   interface Option {
//       name: string;
//       label: string;
//   }
//   interface DefaultCompoundFormDialogProps {
//       title?: string;
//       description?: string;
//       buttonText?: string;
//       children?: any;
//       uri?: string | undefined;
//       inputOptions: Option[];
//       formTypeValues: any
//       messagesSuccess?: string;
//       className?: string;
//       variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
//   }

//   export default function DefaultFormDialog({ children, title, description, buttonText,
//       uri, inputOptions, formTypeValues, messagesSuccess, className, variant }: DefaultCompoundFormDialogProps) {

//       const [openForm, setOpenForm] = useState(false);
//       const { data, setData, post, processing, errors, reset } = useForm<any>({
//           ...formTypeValues,
//       });
//       const handleSubmit = (e: any) => {
//           e.preventDefault();
//           post(uri ?? '', {
//               preserveScroll: true,
//               onSuccess: () => {
//                   toast.success(messagesSuccess ? messagesSuccess : 'Successfully submitted.');
//                   reset();
//                   setOpenForm(false);
//               }
//           });
//       }
//       return (
//           <>
//               <CompoundFormDialog openDialog={openForm} setOpenDialog={setOpenForm}>
//                   <CompoundFormDialog.Header>
//                       <CompoundFormDialog.Title>
//                           {title ? title : ''}
//                       </CompoundFormDialog.Title>
//                       <CompoundFormDialog.Description>
//                           {description ? description : ''}
//                       </CompoundFormDialog.Description>
//                   </CompoundFormDialog.Header>
//                   <CompoundFormDialog.Form onSubmit={handleSubmit} >
//                       {inputOptions?.map((value) => (
//                           <CompoundFormDialog.Content key={value.name}>
//                               <CompoundFormDialog.InputLabel htmlFor={value.name}>
//                                   {value.label}
//                               </CompoundFormDialog.InputLabel>
//                               <CompoundFormDialog.InputField defaultValue={data[value.name]} onChange={(e) => setData(value.name, e.target.value)} id={value.name} />
//                               <CompoundFormDialog.InputErrorMessage message={errors[value.name]} />
//                           </CompoundFormDialog.Content>
//                       ))}

//                       <CompoundFormDialog.PrimaryButton disabled={processing}>
//                           {buttonText ? buttonText : 'Save'}
//                       </CompoundFormDialog.PrimaryButton>
//                   </CompoundFormDialog.Form>
//               </CompoundFormDialog>
//               <Button onClick={() => setOpenForm(true)} variant={variant} className={cn('w-full', className)}>
//                   {children}
//               </Button>
//           </>
//       );


//   }



/////to this
/////to this
/////to this
/////to this


// <DefaultFormDialog
//             title='Create courses'
//             description="Use this to create course. Click 'Create' when you're done."
//             buttonText='Create'
//             inputOptions={[{ name: 'name', label: 'Name', }, { name: 'code', label: 'Code', }]}
//             formTypeValues={{ name: '', code: '' }}
//             uri={route('courses.store')}
//             messagesSuccess='Your new course has been successfully added.'
//         >
//             <PlusIcon /> Create new course
//         </DefaultFormDialog>
