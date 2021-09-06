import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({ article_id, setCommentsList, username }) => {
  const [commentUsername, setCommentUsername] = useState(username);
  const [commentBody, setCommentBody] = useState("");
  const [hasErrored, setHasErrored] = useState(false);
  const [commentPosted, setCommentPosted] = useState(false);

  const handleUsername = ({ target: { value } }) => {
    setCommentUsername(value);
  };

  const handleCommentBody = ({ target: { value } }) => {
    setCommentBody(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasErrored(false);

    postComment(article_id, commentUsername, commentBody)
      .then((postedComment) => {
        setCommentsList((currComment) => {
          return [...currComment, postedComment];
        });
      })
      .catch(() => {
        setHasErrored(true);
      });
    setCommentUsername("");
    setCommentBody("");
    setCommentPosted(true);
  };

  return (
    <form>
      <label>
        username:
        <input
          id="comment-username"
          type="text"
          placeholder="username..."
          onChange={handleUsername}
          value={commentUsername}
          required
        ></input>
      </label>
      <br></br>
      <label>
        comment:
        <textarea
          id="commentBody"
          name="message"
          rows="10"
          cols="50"
          maxLength="500"
          placeholder="type comment..."
          onChange={handleCommentBody}
          value={commentBody}
          required
        ></textarea>
      </label>
      {hasErrored && <p>Error, please try again later...</p>}
      {commentPosted ? (
        <p className="post-comment_accept">thanks, comment posted</p>
      ) : (
        <button
          type="submit"
          className="button__post-comment"
          onClick={handleSubmit}
        >
          Post
        </button>
      )}
    </form>
  );
};

export default AddComment;
