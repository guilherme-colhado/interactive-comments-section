import { ContainerLikeReply, ContainerReply } from "./style";
import { Var } from "../../StyleVariables";
import Reply from '../../images/icon-reply.svg'
import Delete from '../../images/icon-delete.svg'
import Edit from '../../images/icon-edit.svg'
import Like from "../Likes";

export default function LikeReply({comment ,userComment, setDeletes, currentUser, setEdit, setReply, setComments, setReplies, setReplyOfReply}){
    return <ContainerLikeReply>
        <Like score={comment.score} desktop={false}/>
        <ContainerReply>
            {userComment.user.username === currentUser.username?
                <>
                    <div onClick={()=>setDeletes(setComments? [setComments, userComment.id]: [setReplies, userComment.id])}>
                        <img style={{marginRight:'5px'}} src={Delete} alt="Delete icon" />
                        <span style={{color:Var.red, marginRight: '10px', fontWeight:'bold'}}>Delete</span>
                    </div>
                    <div onClick={()=>setEdit(true)}>
                        <img style={{marginRight:'5px'}} src={Edit} alt="Edit icon" />
                        <span style={{color:Var.blue, fontWeight:'bold'}}>Edit</span>
                    </div>
                </>
                :<div onClick={()=>setReply? setReply(pre=>!pre): setReplyOfReply(pre=>!pre)}>
                    <img style={{marginRight:'5px'}} src={Reply} alt="Reply icon" />
                    <span style={{color:Var.blue, fontWeight:'bold'}}>Reply</span>
                </div>
            }
        </ContainerReply>
    </ContainerLikeReply>
}