import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

const Home = () => {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

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
                <button>&#x1f5d1;</button>
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
