import { useEffect } from "react";
import { getComments } from "../api";

const CommentsList = ({ article_id, commentsList, setCommentsList }) => {
  useEffect(() => {
    getComments(article_id).then((comments) => setCommentsList(comments));
  }, [article_id, setCommentsList]);

  return (
    <div>
      {commentsList.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <p>
              <span className="span__color">{comment.author}</span>
              <span className="span__date">
                {Date(comment.created_at).substring(
                  0,
                  Date(comment.created_at).length - 31
                )}
              </span>
            </p>
            <br></br>
            <p>{comment.body}</p>
            <p className="votes">Votes: {comment.votes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
