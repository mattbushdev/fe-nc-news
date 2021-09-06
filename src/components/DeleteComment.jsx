import { useState } from "react";
import { deleteComment, getComments } from "../api";
import bin from "../icons/delete.png";

const DeleteComment = ({
  comment_id,
  article_id,
  commentAuthor,
  username,
  setCommentsList,
}) => {
  const [hasErrored, setHasErrored] = useState(false);

  const handleDelete = ({ target: { value } }) => {
    if (username === commentAuthor) {
      setHasErrored(false);
      deleteComment(comment_id)
        .then(() => {
          return getComments(article_id);
        })
        .then((comments) => setCommentsList(comments))
        .catch(setHasErrored(true));
    } else {
      setHasErrored(true);
    }
  };

  return (
    <>
      <button onClick={handleDelete} className="button__comments-delete">
        <img src={bin} width="20" height="20" alt="delete comment button" />
      </button>
      {hasErrored && <p>Error, please try again later...</p>}
    </>
  );
};

export default DeleteComment;
