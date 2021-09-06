import { useState, useEffect } from "react";
import { getComments } from "../api";
import { patchCommentVotes } from "../api";
import Voter from "./Voter";
import DeleteComment from "./DeleteComment";

const CommentsList = ({
  article_id,
  commentsList,
  setCommentsList,
  username,
}) => {
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getComments(article_id).then((comments) => setCommentsList(comments));
  }, [article_id, setCommentsList]);

  const checkAuthor = (username, author) => {
    if (username === author) {
      return true;
    } else {
      return false;
    }
  };

  const convertTime = (time) => {
    let date = new Date(time);
    return date.toDateString();
  };

  return (
    <div>
      {commentsList.map((comment) => {
        return (
          <div key={comment.comment_id} className="comments__card">
            <p className="comments__header">
              <span className="comments__author">{comment.author}</span>
              <span className="comments__date">
                {convertTime(comment.created_at)}
              </span>
            </p>
            <p className="comments__body">{comment.body}</p>
            <div className="comments__actions">
              <p className="comments__votes">
                Votes: {comment.votes}
                <Voter
                  id={comment.comment_id}
                  votes={votes}
                  setState={setCommentsList}
                  patchFunction={patchCommentVotes}
                />
              </p>
              {checkAuthor(username, comment.author) ? (
                <DeleteComment
                  comment_id={comment.comment_id}
                  article_id={article_id}
                  commentAuthor={comment.author}
                  username={username}
                  setCommentsList={setCommentsList}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
