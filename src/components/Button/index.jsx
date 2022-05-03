import { Button } from "@mui/material";
import { Var } from "../../StyleVariables";

export default function ButtonComponent({children, callback}) {
    return <Button sx={{
        backgroundColor: Var.blue,
        color: "white",
        height: 'max-content',
        padding: '5px 25px',
        width: 'max-content',
        marginRight: '10px',
        '&:hover': {
            backgroundColor: Var.blue50,
            color: "white",
            textDecoration: 'underline',
        }
    }} onClick={callback}>{children}</Button>
}