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




type CardProps = React.ComponentProps<typeof Card>

export function SimpleCard({ children, className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>

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

function ActionButtons() {
    const handleEdit = () => {
        console.log('edit')
    }
    const handleDelete = () => {
        console.log('delete')
    }
    return (
        <CardFooter className="flex gap-5">
            <Button onClick={handleEdit} variant={'outline'} className="w-full">
                <Edit2Icon /> Edit        </Button>
            <Button onClick={handleDelete} variant={'destructive'} className="w-full">
                <Trash2Icon /> Delete
            </Button>
        </CardFooter>
    );
}

SimpleCard.Header = Header;
SimpleCard.Title = Title;
SimpleCard.Description = Description;
SimpleCard.ActionButtons = ActionButtons;
