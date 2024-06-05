import React from "react";
import { useState } from "react";
import { addComment } from "config/actions";
import { useDispatch } from "react-redux";
import Comment from "./comment/Comment";

function Comments({ novel }) {
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState("");
  const handleAddComment = () => {
    if (commentInput.trim() !== "") {
      dispatch(addComment({ id: novel.id, text: commentInput }));
      setCommentInput("");
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={handleAddComment}>Add</button>
      </div>
      <hr />
      <div>
        {novel.comments &&
          novel.comments.map((comment) => (
            <Comment comment={comment} novelId={novel.id} />
          ))}
      </div>
    </div>
  );
}

export default Comments;
