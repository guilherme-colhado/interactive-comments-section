import { Box } from "@mui/system";
import { Button, Card, Sob } from "./style";

export default function Delete({setDeletes, deletes}){
    const yes = () => {
        deletes[0](previus=>previus.filter(comment=>comment.id !== deletes[1]))
        setDeletes([])    
    }
    const no = () => setDeletes([])
    return <Sob>
        <Card>
            <Box sx={{marginLeft:'15px'}}>
                <h3 style={{marginBottom:'10px'}}>Delete comment</h3>
                <p style={{marginBottom:'10px'}}>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                <Button onClick={no} backgroundColor={'#3a3e49'}>NO, CANCEL</Button>
                <Button onClick={yes} backgroundColor={'#ed6363'}>YES, DELETE</Button>
            </Box>
        </Card>
    </Sob> 

}