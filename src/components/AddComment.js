import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addComment } from "../config/actions";

function AddComment() {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      dispatch(addComment({ id: id, comment: comment }));
      setComment("");
    }
  };

  return (
    <div>
      <hr />
      <div></div>
    </div>
  );
}

export default AddComment;
