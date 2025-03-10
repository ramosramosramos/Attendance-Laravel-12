
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react"



export default function DefaultSelect({children,...props}:React.ComponentProps<typeof Select>) {

    return (
        <Select {...props}>
            {children}
        </Select>
        // <Select >
        //     <SelectTrigger>
        //         <SelectValue placeholder="Select a verified email to display" />
        //     </SelectTrigger>

        //     <SelectContent>
        //         <SelectItem value="m@example.com">m@example.com</SelectItem>
        //         <SelectItem value="m@google.com">m@google.com</SelectItem>
        //         <SelectItem value="m@support.com">m@support.com</SelectItem>
        //     </SelectContent>
        // </Select>
    )
}

function Trigger
({children,...props}:React.ComponentProps<typeof SelectTrigger>)
{
    return (
        <SelectTrigger {...props}>
          {children}
        </SelectTrigger>
    )
}
function Value ({...props}:React.ComponentProps<typeof SelectValue>){
    return (
        <SelectValue {...props}/>
    )
}


function  Content({children,...props}:React.ComponentProps<typeof SelectContent>){
    return (
        <SelectContent {...props}>
          {children}
        </SelectContent>
    )
}

function Item({children,...props}:React.ComponentProps<typeof SelectItem>){
    return (
        <SelectItem {...props}>{children}</SelectItem>
    )
}

DefaultSelect.Trigger= Trigger;
DefaultSelect.Value= Value;
DefaultSelect.Content= Content;
DefaultSelect.Item= Item;
