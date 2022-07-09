import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import {useNavigate} from 'react-router-dom'
const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  let navigate = useNavigate()
  const postCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { 
        name: auth.currentUser.displayName, 
        id: auth.currentUser.uid 
      },
    });
    navigate("/")
  };

  useEffect(()=>{
    if(!isAuth) {
      navigate("/login")
    }
  },[])

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => setPostText(event.target.value)}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
