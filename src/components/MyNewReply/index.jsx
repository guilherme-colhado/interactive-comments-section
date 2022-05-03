import { SectionReply } from './style'
import Avatar from '@mui/material/Avatar'
import { imgs } from "../../img";
import { TextField } from '@mui/material'
import ButtonComponent from '../Button'
import { useState } from 'react';

export default function MyNewReply({commentStyle, currentUser, commentUserId, comments, setReplies, id, setReplyOfReply, setId, setReply}){    const [comment, setComment] = useState('')
    const handleClickNewReply = () => {
        setId(id+1)
        setReplies(previus => {
            const replyingTo = comments.filter(comment=>comment.id === commentUserId)[0]
            console.log('Supimpa',replyingTo)
            return [...previus, {
                "id": id+1,
                "content": comment,
                "createdAt": '1 second ago',
                "score": 0,
                "replyingTo": replyingTo.user.username,
                "user": currentUser
        }]})
        setReply? setReply(false) : setReplyOfReply(false)
    }
    return <SectionReply comment={commentStyle}>
        <Avatar alt={currentUser.username} src={imgs[currentUser.username]}></Avatar>
        <TextField onChange={e=>setComment(e.target.value)} value={comment} label='Add a comment...' multiline rows={3} sx={{margin:'0 7px', width:'100%'}}/>
        <ButtonComponent callback={handleClickNewReply}>Send</ButtonComponent>
    </SectionReply>
}