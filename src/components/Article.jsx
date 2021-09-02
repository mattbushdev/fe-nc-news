import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import ExpandComments from "./ExpandComments";
import ExpandAddComment from "./ExpandAddComment";
import AddComment from "./AddComment";
import { useVoteCount } from "../hooks/useVoteCount.jsx";
import { useArticle } from "../hooks/useApi";
import thumbup from "../icons/thumb-up.svg";
import thumbdown from "../icons/thumb-down.svg";
import calendar from "../icons/calendar.svg";
import coding from "../images/coding.jpg";
import football from "../images/football.jpg";
import cooking from "../images/cooking.jpg";

const Article = () => {
  const [commentsList, setCommentsList] = useState([]);
  const { article_id } = useParams();
  const { voteCount, incVotes, decVotes, hasErrored } =
    useVoteCount(article_id);
  const { article, isLoading } = useArticle(article_id);
  const images = { coding, football, cooking };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <section className="articles">
      <img
        src={images[article.topic]}
        alt={`${article.topic} topic`}
        className="article__img"
      />
      <Link to={`/articles/${article.topic}`}>
        <button className="button__topic">{article.topic}</button>
      </Link>
      <p className="article__header">
        <span className="span__color-article">{article.author}</span>
        <span className="span__date-article">
          <img src={calendar} alt="calendar icon" className="calendar" />
          {Date(article.created_at).substring(
            0,
            Date(article.created_at).length - 31
          )}
        </span>
      </p>
      <br></br>
      <h3>{article.title}</h3>
      <p className="article__body">{article.body}</p>
      <div className="article__action">
        <p className="votes">
          {hasErrored && <p>Error, please try again later...</p>}
          Votes: {article.votes + voteCount}
          <button onClick={incVotes} className="button__thumb-up">
            <img src={thumbup} alt="thumb up icon to up-vote" />
          </button>
          <button onClick={decVotes} className="button__thumb-down">
            <img src={thumbdown} alt="thumb down icon to down-vote" />
          </button>
        </p>
        <ExpandComments article={article}>
          <ExpandAddComment>
            <AddComment
              article_id={article_id}
              setCommentsList={setCommentsList}
            />
          </ExpandAddComment>
          <CommentsList
            article_id={article_id}
            commentsList={commentsList}
            setCommentsList={setCommentsList}
          />
        </ExpandComments>
      </div>
    </section>
  );
};

export default Article;
