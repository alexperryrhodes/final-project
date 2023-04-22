import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div className="Post">
      <h2>{props.title}</h2>
      <p>{new Date(props.created_at).toDateString()}</p>
      <p>{props.upvote_count} upvotes</p>

      <Link to={"/" + props.id}>
        <button className="postButton">More Info</button>
      </Link>
    </div>
  );
}
