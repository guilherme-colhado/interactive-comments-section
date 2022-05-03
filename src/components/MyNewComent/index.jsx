import { SecaoComentario } from './style'
import Avatar from '@mui/material/Avatar'
import { imgs } from "../../img";
import { TextField } from '@mui/material'
import ButtonComponent from '../Button'
import { useState } from 'react';

export default function MyNewComent({currentUser, setComments, id, setId, }){
    const [comment, setComment] = useState('')
    const handleClickNewComment = () => {
        setId(id+1)
        setComments(previus => [...previus, {
            "id": id,
            "content": comment,
            "createdAt": "1 second ago",
            "score": 0,
            "user": {...currentUser},
            "replies": []
        }])
        setComment('')
    }
    return <SecaoComentario>
        <Avatar alt={currentUser.username} src={imgs[currentUser.username]}></Avatar>
        <TextField onChange={e=>setComment(e.target.value)} value={comment} label='Add a comment...' multiline rows={3} sx={{margin:'0 7px', width:'100%'}}/>
        <ButtonComponent callback={handleClickNewComment}>Send</ButtonComponent>
    </SecaoComentario>
}