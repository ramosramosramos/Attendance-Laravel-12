import { useState } from "react";
import { CompoundFormDialog } from "../dialogs/compound-form-dialog";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { LucideProps } from "lucide-react";

interface Option {
    name: string;
    label: string;
}
interface DefaultCompoundFormDialogProps {
    title?: string;
    description?: string;
    buttonText?: string;
    children?: any;
    uri?: string | undefined;
    inputOptions: Option[];
    formTypeValues: any
    messagesSuccess?: string;
}

export default function DefaultFormDialog({ children, title, description, buttonText, uri, inputOptions, formTypeValues, messagesSuccess }: DefaultCompoundFormDialogProps) {

    const [openForm, setOpenForm] = useState(false);
    const { data, setData, post, processing, errors } = useForm<any>({
        ...formTypeValues,
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(uri ?? '', {
            preserveScroll: true,
            onSuccess: () => {
                toast.success(messagesSuccess ? messagesSuccess : 'Successfully submitted.');
                setOpenForm(false);
            }
        });
    }
    return (
        <>
            <CompoundFormDialog openDialog={openForm} setOpenDialog={setOpenForm}>
                <CompoundFormDialog.Header>
                    <CompoundFormDialog.Title>
                        {title ? title : ''}
                    </CompoundFormDialog.Title>
                    <CompoundFormDialog.Description>
                        {description ? description : ''}
                    </CompoundFormDialog.Description>
                </CompoundFormDialog.Header>
                <CompoundFormDialog.Form onSubmit={handleSubmit} >
                    {inputOptions?.map((value) => (
                        <CompoundFormDialog.Content key={value.name}>
                            <CompoundFormDialog.InputLabel htmlFor={value.name}>
                                {value.label}
                            </CompoundFormDialog.InputLabel>
                            <CompoundFormDialog.InputField defaultValue={data[value.name]} onChange={(e) => setData(value.name, e.target.value)} id={value.name} />
                            <CompoundFormDialog.InputErrorMessage message={errors[value.name]} />
                        </CompoundFormDialog.Content>
                    ))}

                    <CompoundFormDialog.PrimaryButton disabled={processing}>
                        {buttonText ? buttonText : 'Save'}
                    </CompoundFormDialog.PrimaryButton>
                </CompoundFormDialog.Form>
            </CompoundFormDialog>
            <Button onClick={() => setOpenForm(true)} variant={'outline'} className="w-full">
                {children}
            </Button>
        </>
    );


}

