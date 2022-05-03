import CommentOfComments from "../ComentOfComents";
import Divider from "../Divider";
import { SectionReply } from "./style";


export default function Replies({replies, currentUser, setDeletes, setReplies, id, setId, setComments}){
    return <SectionReply>
        <Divider/>
        <div style={{width:'100%'}}>
            {replies.map(replie=><CommentOfComments setDeletes={setDeletes} setComments={setComments} comments={replies} id={id} setId={setId} setReplies={setReplies} replie={replie} key={replie.id} currentUser={currentUser}/>)}
        </div>
    </SectionReply>
}