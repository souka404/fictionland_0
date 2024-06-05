import { deleteComment } from "config/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import EditComment from "components/EditComment";

function Comment({ comment, novelId }) {
  const dispatch = useDispatch();
  const [isEditingComment, setIsEditingComment] = useState(false);
  const handleEditComment = () => {
    setIsEditingComment(true);
  };
  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment({ novelId: novelId, commentId: commentId }));
  };
  const handleCloseEdit = () => {
    setIsEditingComment(null);
  };

  return (
    <div key={comment.id}>
      {isEditingComment ? (
        <EditComment novelId={novelId} comment={comment} onClose={handleCloseEdit}/>
      ) : (
        <>
          <p>{comment.text}</p>
          <button onClick={() => handleEditComment()}>Edit</button>
          <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
        </>
      )}

      <hr />
    </div>
  );
}

export default Comment;
