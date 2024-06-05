import { useState } from "react";
import { useDispatch } from "react-redux";
import { editComment } from "../config/actions";

function EditComment({ novelId, comment, onClose }) {
  const [newComment, setNewComment] = useState(comment.text);
  const dispatch = useDispatch();

  const handleEditComment = () => {
    dispatch(
      editComment({
        novelId: novelId,
        commentId: comment.id,
        newComment: newComment,
      })
    );
    onClose();
  };

  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleEditComment}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default EditComment;
