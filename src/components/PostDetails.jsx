import React from "react";
import { Link } from "react-router-dom";

export default function PostDetails(props) {

  console.log("PD", props.details.title)

  return (
    <div className="PostDetails">
      <h2>{props.details.title}</h2>
      <img src={props.details.image_url} width="100" height="100" />
      <p>{props.details.content}</p>
      <p>{props.details.upvote_count} upvotes</p>

      <Link to={"edit/" + props.details.id}>
        <button className="postButton">Edit</button>
      </Link>
      <button className="postButton">Upvote</button>
    </div>
  );
}
