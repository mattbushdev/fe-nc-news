import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import ExpandComments from "./ExpandComments";
import ExpandAddComment from "./ExpandAddComment";
import AddComment from "./AddComment";
import { useArticle } from "../hooks/useApi";
import calendar from "../icons/calendar.svg";
import coding from "../images/coding.jpg";
import football from "../images/football.jpg";
import cooking from "../images/cooking.jpg";
import { patchVotes } from "../api";
import Voter from "./Voter";

const Article = ({ username }) => {
  const [commentsList, setCommentsList] = useState([]);
  const { article_id } = useParams();
  const [votes, setVotes] = useState(0);

  const { article, setArticle, isLoading } = useArticle(article_id);
  const images = { coding, football, cooking };

  if (isLoading)
    return (
      <section className="loading">
        <div className="loading__wheel"></div>
      </section>
    );

  const convertTime = (time) => {
    let date = new Date(time);
    return date.toDateString();
  };

  return (
    <>
      <section className="articles">
        <img
          src={images[article.topic]}
          alt={`${article.topic} topic`}
          className="article__img"
        />
        <Link to={`/articles/${article.topic}`} className="article__topic">
          <button className="button__topic">{article.topic}</button>
        </Link>
        <p className="article__header">
          <span className="span__color-article">{article.author}</span>

          <span className="article__date">
            <img
              src={calendar}
              alt="calendar icon"
              className="calendar"
              width="12"
              height="12"
            />
            {convertTime(article.created_at)}
          </span>
        </p>
        <br></br>
        <h3>{article.title}</h3>
        <p className="article__body">{article.body}</p>
        <div className="article__action">
          <div className="votes">
            <p>Votes: {article.votes}</p>
            <Voter
              id={article_id}
              votes={votes}
              setState={setArticle}
              patchFunction={patchVotes}
            />
          </div>
          <ExpandComments
            article={article}
            votes={votes}
            setVotes={setVotes}
            setCommentsList={setCommentsList}
          >
            <ExpandAddComment>
              <AddComment
                article_id={article_id}
                setCommentsList={setCommentsList}
                username={username}
              />
            </ExpandAddComment>
            <CommentsList
              article_id={article_id}
              commentsList={commentsList}
              setCommentsList={setCommentsList}
              votes={votes}
              setVotes={setVotes}
              username={username}
            />
          </ExpandComments>
        </div>
      </section>
    </>
  );
};

export default Article;
