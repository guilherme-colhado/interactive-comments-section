import { ButtonContainer, SecaoComentario } from './style'
import Avatar from '@mui/material/Avatar'
import { imgs } from "../../img";
import { TextField } from '@mui/material'
import ButtonComponent from '../Button'
import { useState } from 'react';

export default function MyNewEdit({setComments, setReplies, setEdit, id}){
    const [comment, setComment] = useState('')
    const handleClickUpdateReplies = () => {
        setReplies(previus => {
            const previusValue = previus.filter(comment=>comment.id === id)[0]
            const output = previus.filter(comment=>comment.id !== id)
            return [...output, {
                "id": id,
                "content": comment,
                "createdAt": previusValue.createdAt,
                "score": previusValue.score,
                "replyingTo": previusValue.replyingTo,
                "user": previusValue.user
        }]})
        setEdit(false)
    }
    const handleClickUpdateComments = () => {
        setComments(previus => {
            const previusValue = previus.filter(comment=>comment.id === id)[0]
            console.log(previusValue)
            const output = previus.filter(comment=>comment.id !== id)
            return [...output, {
                "id": previusValue.id,
                "content": comment,
                "createdAt": previusValue.createdAt,
                "score": previusValue.score,
                "user": {...previusValue.user},
                "replies": previusValue.replies
        }]})
        setEdit(false)
    }
    const handleClickCancel = () => setEdit(false)
    return <SecaoComentario>
        <TextField onChange={e=>setComment(e.target.value)} label='Add a comment...' multiline rows={3} sx={{width:'100%'}}/>
        <ButtonContainer>
            <ButtonComponent callback={setReplies? handleClickUpdateReplies:handleClickUpdateComments}>Update</ButtonComponent>
            <ButtonComponent callback={handleClickCancel}>Cancel</ButtonComponent>
        </ButtonContainer>
    </SecaoComentario>
}