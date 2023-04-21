import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div className="Post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.upvote_count} upvotes</p>

      <Link to={"edit/" + props.id}>
        <button className="postButton">Edit</button>
      </Link>

      <Link to={"/" + props.id}>
        <button className="postButton">More Info</button>
      </Link>

      <button className="postButton">Upvote</button>
    </div>
  );
}
