import { useEffect } from "react";
import { getComments } from "../api";
import { useVoteCount } from "../hooks/useVoteCount.jsx";
import { patchCommentVotes } from "../api";

import thumbup from "../icons/thumb-up.svg";
import thumbdown from "../icons/thumb-down.svg";

const CommentsList = ({ article_id, commentsList, setCommentsList }) => {
  // const { voteCount, incVotes, decVotes, hasErrored } =
  //   useVoteCount(patchCommentVotes);

  useEffect(() => {
    getComments(article_id).then((comments) => setCommentsList(comments));
  }, [article_id, setCommentsList]);

  const convertTime = (time) => {
    let date = new Date(time);
    return (
      date.getHours() +
      ":" +
      date.getMinutes() +
      " " +
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear()
    );
  };

  return (
    <div>
      {commentsList.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <p>
              <span className="span__color">{comment.author}</span>
              <span className="span__date">
                {convertTime(comment.created_at)}
              </span>
            </p>
            <br></br>
            <p>{comment.body}</p>
            <p className="votes">
              Votes: {comment.votes}
              <button
                // onClick={incVotes(comment.comment_id)}
                className="button__thumb-up"
              >
                <img src={thumbup} alt="thumb up icon to up-vote" />
              </button>
              <button
                // onClick={decVotes(comment.comment_id)}
                className="button__thumb-down"
              >
                <img src={thumbdown} alt="thumb down icon to down-vote" />
              </button>
            </p>
            {/* {hasErrored && <p>Error, please try again later...</p>} */}
            {/* Votes: {comment.votes + voteCount} */}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
