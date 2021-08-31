import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle, patchVotes } from "../api";
import CommentsList from "./CommentsList";
import ExpandComments from "./ExpandComments";
import ExpandAddComment from "./ExpandAddComment";
import AddComment from "./AddComment";

const Article = () => {
  const [article, setArticle] = useState({});
  const [votesChange, setVotesChange] = useState(0);
  const [hasErrored, setHasErrored] = useState(false);
  const { article_id } = useParams();

  const incVotes = () => {
    setHasErrored(false);

    setVotesChange((currVoteChange) => {
      return currVoteChange + 1;
    });

    patchVotes(article_id, 1).catch(() => {
      setHasErrored(true);
      setVotesChange((currVoteChange) => {
        return currVoteChange - 1;
      });
    });
  };

  const decVotes = () => {
    setHasErrored(false);

    setVotesChange((currVoteChange) => {
      return currVoteChange - 1;
    });

    patchVotes(article_id, -1).catch(() => {
      setHasErrored(true);
      setVotesChange((currVoteChange) => {
        return currVoteChange + 1;
      });
    });
  };

  useEffect(() => {
    getArticle(article_id).then((article) => setArticle(article));
  }, [article_id]);

  return (
    <section className="articles">
      {/* <img src="./" alt="article"></img> */}
      <Link to={`/articles/${article.topic}`}>
        <button className="button__topic">{article.topic}</button>
      </Link>
      <p className="article__header">
        <span className="span__color-article">{article.author}</span>
        <span className="span__date-article">
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
          Votes: {article.votes + votesChange}
          <button onClick={incVotes} className="button__circle button__green">
            +
          </button>
          <button onClick={decVotes} className="button__circle button__red">
            -
          </button>
        </p>
        <ExpandComments article={article}>
          <ExpandAddComment>
            <AddComment />
          </ExpandAddComment>
          <CommentsList article_id={article_id} />
        </ExpandComments>
      </div>
    </section>
  );
};

export default Article;
