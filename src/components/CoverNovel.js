import cover from "assets/cover.jpeg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment } from "config/actions";
import EditComment from "./EditComment";
import { useParams } from "react-router-dom";
import NotFound from "components/pages/notFound/NotFound";
import Comments from "components/layouts/comments/Comments";

function CoverNovel() {
  const { novelId } = useParams();
  const dispatch = useDispatch();
  const [editingComment, setEditingComment] = useState(null);
  const novel = useSelector((state) => state.novels).find(
    (novel) => novel.id === novelId
  );
  if (!novel) {
    return <NotFound />;
  }


  const handleEditClick = (commentId, currentComment) => {
    setEditingComment({ commentId, currentComment });
  };

  const handleEditComment = (newComment) => {
    dispatch(
      editComment({
        novelId: novel.id,
        commentId: editingComment.commentId,
        newComment: newComment,
      })
    );
    setEditingComment(null);
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
  };


  return (
    <>
      <div>
        <img src={cover} alt="" className="img" />
        <p>id: {novel.id}</p>
        <p>title: {novel.title}</p>
        <p>description: {novel.description}</p>
        <p>genre: {novel.genre}</p>
        <hr />

        <Comments novel={novel}/>

        {/* {editingComment && (
          <EditComment
            novelId={novel.id}
            commentId={editingComment.commentId}
            currentComment={editingComment.currentComment}
            onClose={handleCancelEdit}
          />
        )} */}
      </div>
    </>
  );
}

export default CoverNovel;
