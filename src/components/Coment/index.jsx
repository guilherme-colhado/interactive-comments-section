import { Box } from "@mui/material"
import { useState } from "react"
import { Var } from "../../StyleVariables"
import LikeReply from "../LikeReply"
import Like from "../Likes"
import MyNewEdit from "../MyNewEdit"
import MyNewReply from "../MyNewReply"
import Replies from "../Replies"
import UserReply from "../UserReply"
import { SectionComent } from "./style"


export default function Coment({comment, comments, currentUser, setComments, id, setId, setDeletes}) {
    const [replies, setReplies] = useState(comment.replies)
    const [edit, setEdit] = useState(false)
    const [reply, setReply] = useState(false)
    return <>
        <SectionComent>
            <Like score={comment.score} desktop={true}/>
            <Box width={'100%'}>
                <UserReply userComment={comment} setDeletes={setDeletes} comments={comments} setComments={setComments} id={id} setId={setId} setReply={setReply} setEdit={setEdit} currentUser={currentUser}/>
                {!edit?<p style={{color:Var.gray50}}>{comment.content}</p>
                :
                <MyNewEdit comments={comments} id={comment.id} setComments={setComments} setEdit={setEdit} currentUser={currentUser}/>}
            </Box>
            <LikeReply comment={comment} userComment={comment} setDeletes={setDeletes} comments={comments} setComments={setComments} id={id} setId={setId} setReply={setReply} setEdit={setEdit} currentUser={currentUser}/>
        </SectionComent>
        <Box width={'100%'} sx={{margin:'0 auto', transition:'all .5s ease-in'}}>
            {reply && <MyNewReply commentStyle={true} id={id} setId={setId} replies={replies} commentUserId={comment.id} setReply={setReply} setReplies={setReplies} comments={comments} currentUser={currentUser}/>}
        </Box>
        {replies.length>0 && <Replies reply={reply} setDeletes={setDeletes} id={id} comments={comments} commentUserId={comment.id} setId={setId} setReply={setReply} replies={replies} setReplies={setReplies} setComments={setComments} currentUser={currentUser}/>}
    </>
}