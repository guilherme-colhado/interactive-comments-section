import { Avatar } from "@mui/material";
import { ContainerUserReply, ContainerUser, ContainerReply } from "./style";
import { imgs } from '../../img';
import { Var } from "../../StyleVariables";
import Reply from '../../images/icon-reply.svg'
import Delete from '../../images/icon-delete.svg'
import Edit from '../../images/icon-edit.svg'

export default function UserReply({userComment, setDeletes, currentUser, setEdit, setReply, setComments, setReplies, setReplyOfReply}){
    return <ContainerUserReply>
        <ContainerUser>
            <Avatar src={imgs[userComment.user.username || currentUser.username]} alt={userComment.user.username || currentUser.username}></Avatar>
            <p style={{color:"black", marginLeft:'10px'}}>{userComment.user.username}</p>
            {userComment.user.username === currentUser.username && <p style={{color:'white',
            borderRadius: '2px',
            backgroundColor: Var.blue,
            padding: '2px 5px',
            margin: '0 5px'
            }}>
                you
            </p>}
            <p style={{color:Var.gray50, marginLeft:'10px'}}>{userComment.createdAt}</p>
        </ContainerUser>
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
    </ContainerUserReply>
}