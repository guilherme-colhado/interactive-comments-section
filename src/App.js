import Coment from "./components/Coment";
import MyNewComent from "./components/MyNewComent";
import { GlobalStyle } from "./GlobalStyle";
import data from './data.json'
import { useState } from "react";
import Delete from "./components/Delete";

function App() {    
  const [deletes, setDeletes] = useState([]);
  const [comments, setComments] = useState(data.comments)
  let idNew = 0
  data.comments.map(comment=>{
    idNew++
    idNew+=comment.replies.length
    return idNew
  })
  const [id, setId] = useState(idNew)
  return (
    <div>
      <GlobalStyle/>
      {deletes.length>0 && <Delete setDeletes={setDeletes} setComments={setComments} deletes={deletes}/>}
      <section>
        {comments.map(comment=><Coment comment={comment} 
        setComments={setComments} 
        comments={comments} 
        key={comment.id} 
        currentUser={data.currentUser}
        id={id}
        setId={setId}
        setDeletes={setDeletes}
        />)}
      </section>
      <MyNewComent currentUser={data.currentUser} setComments={setComments} id={id} setId={setId}/>
    </div>
  );
}

export default App;
