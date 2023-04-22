import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import SortButton from "../components/SortButton";

export default function HomeFeed({ data }) {
  const [post, setPost] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    let filteredPosts = post.filter(function (item) {
      return item.title.startsWith(searchValue);
    });
    setPost(filteredPosts);
  };

  useEffect(() => {
    setPost(data);
  }, [data]);

  return (
    <div>
      <NavBar />

      <div className="HomeFeed">
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          onChange={(inputString) => searchItems(inputString.target.value)}
        />

        <SortButton />

        {post && post.length > 0 ? (
          post.map((post, index) => (
            <Post
              key={post.id}
              id={post.id}
              created_at={post.created_at}
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
