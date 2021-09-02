import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({ article_id, setCommentsList }) => {
  const [commentUsername, setCommentUsername] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [hasErrored, setHasErrored] = useState(false);

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
      .then((postComment) => {
        setCommentsList((currComment) => {
          return [...currComment, postComment];
        });
      })
      .catch(() => {
        setHasErrored(true);
      });
    setCommentUsername("");
    setCommentBody("");
  };

  return (
    <form>
      <label>
        <input
          id="comment-username"
          type="text"
          placeholder="username..."
          onChange={handleUsername}
          required
        ></input>
      </label>
      <br></br>
      <label>
        <textarea
          id="commentBody"
          name="message"
          rows="10"
          cols="50"
          maxLength="500"
          placeholder="type comment..."
          onChange={handleCommentBody}
          required
        ></textarea>
      </label>
      {hasErrored && <p>Error, please try again later...</p>}
      <button
        type="submit"
        className="button__post-comment"
        onClick={handleSubmit}
      >
        Post
      </button>
    </form>
  );
};

export default AddComment;
