import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import SortButton from "../components/SortButton";

export default function HomeFeed({ data }) {

  console.log("d", data)

  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(data);
  }, [data]);

  return (
    <div>
      <p>HomeFeed</p>
      <NavBar />
      <SortButton />

      <div className="HomeFeed">
        {post && post.length > 0 ? (
          post.map((post, index) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              image_url={post.image_url}
              upvote_count={post.upvote_count}
            />
          ))
        ) : (
          <h3>No Posts Yet</h3>
        )}
      </div>
    </div>
  );
}
