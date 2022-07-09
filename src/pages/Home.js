import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";

const Home = ({isAuth}) => {
  const [postLists, setPostLists] = useState([]);
  const [isEffect,setIsEffect] = useState(false)
  const postCollectionRef = collection(db, "posts");

  useEffect(()=>{
    setIsEffect(true)
  },[])
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    setIsEffect(false)
  },[isEffect]);

  const deletePost = async(id) => {
    const postDoc = doc(db,"posts", id)
    await deleteDoc(postDoc)
    setIsEffect(true)
  }

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={()=>{deletePost(post.id)}}>&#x1f5d1;</button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
