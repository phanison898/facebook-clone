import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";
import db from "../../firebase";

const Posts = () => {
  const classes = Style();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    return unsubscribe;
  }, []);

  return (
    <div className={classes.posts}>
      <FlipMove style={{ width: "100%" }}>
        {Array.from(posts).map((post) => (
          <Post
            key={post.id}
            profile={post.data.profile}
            username={post.data.username}
            timestamp={post.data.timestamp}
            description={post.data.description}
            fileType={post.data.fileType}
            fileData={post.data.fileData}
          />
        ))}
      </FlipMove>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  posts: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default Posts;
