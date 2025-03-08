import { WhenVisible } from "@inertiajs/react";
import { LinearProgress } from "@mui/material";




export default function LinearLoading({ children, data }:any) {
    return (
        <>
            <WhenVisible data={data} fallback={<div><LinearProgress /></div>}>
                {children}
            </WhenVisible>
        </>
    )
}
