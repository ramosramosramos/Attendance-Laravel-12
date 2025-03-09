import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"


interface DialogProps {
    isOpen?: boolean;
    title?: string;
    description?: string;
    cancelText?: string;
    actionText?: string;
    cancelOnClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
    actionOnClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export function ConfirmDialog({ isOpen, title, description, cancelText, actionText ,actionOnClick,cancelOnClick}: DialogProps) {
    return (
        <AlertDialog open={isOpen}>

            <AlertDialogContent>
                <AlertDialogHeader>
                    {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
                    {description &&
                        <AlertDialogDescription>
                            {description}
                        </AlertDialogDescription>
                    }
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer" onClick={cancelOnClick}> {cancelText ? cancelText : 'Cancel'}</AlertDialogCancel>
                    <AlertDialogAction className="cursor-pointer" onClick={actionOnClick} >{actionText ? actionText : 'Continue'}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
