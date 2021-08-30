import { useEffect, useState } from "react";
import { getComments } from "../api";

const CommentsList = ({ article_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  console.log(article_id, "<--- article_id in Comments");

  useEffect(() => {
    getComments(article_id).then((comments) => setCommentsList(comments));
  }, [article_id]);

  return (
    <section>
      <ul>
        {commentsList.map((comment) => {
          return (
            <li>
              {comment.author}
              <p>{comment.body}</p>
              <p>{comment.created_at}</p>
              <p>{comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
