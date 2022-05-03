import { Box } from "@mui/material";
import { useState } from "react";
import { Var } from "../../StyleVariables";
import LikeReply from "../LikeReply";
import Like from "../Likes";
import MyNewEdit from "../MyNewEdit";
import MyNewReply from "../MyNewReply";
import UserReply from "../UserReply";
import { SectionComentOfComnets } from "./style";

export default function CommentOfComments({replie, setDeletes, setReplies, comments, currentUser, setComments, id, setId}){
    const [edit, setEdit] = useState(false);
    const [replyOfReply, setReplyOfReply] = useState(false);
    return <Box minWidth={'100%'} maxWidth={'100%'} sx={{margin: '0 auto'}}>
        <SectionComentOfComnets>
            <Like score={replie.score} desktop={true}/>
            <Box width={'100%'}>
                <UserReply userComment={replie} setDeletes={setDeletes} setReplies={setReplies} setReplyOfReply={setReplyOfReply} setEdit={setEdit} currentUser={currentUser}/>
                {!edit?<p style={{color:Var.gray50, wordBreak:'break-word'}}>
                    <span style={{color:Var.blue, fontWeight:'bold'}}>@{replie.replyingTo} </span>
                    {replie.content}
                </p>
                :<MyNewEdit comments={comments} id={replie.id} setReplies={setReplies} setComments={setComments} setEdit={setEdit} currentUser={currentUser}/>}
            </Box>
            <LikeReply comment={replie} userComment={replie} setDeletes={setDeletes} setReplies={setReplies} setReplyOfReply={setReplyOfReply} setEdit={setEdit} currentUser={currentUser}/>

        </SectionComentOfComnets>
        <Box width={'100%'}>
            {replyOfReply && <MyNewReply commentStyle={false} currentUser={currentUser} commentUserId={replie.id} comments={comments} setReplies={setReplies} id={id} setId={setId} setReplyOfReply={setReplyOfReply}></MyNewReply>}
        </Box>
    </Box>
}