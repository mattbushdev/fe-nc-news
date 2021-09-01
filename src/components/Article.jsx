import { Link, useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import ExpandComments from "./ExpandComments";
import ExpandAddComment from "./ExpandAddComment";
import AddComment from "./AddComment";
import { useVoteCount } from "../hooks/useVoteCount.jsx";
import { useArticle } from "../hooks/useApi";

const Article = () => {
  const { article_id } = useParams();
  const { voteCount, incVotes, decVotes, hasErrored } =
    useVoteCount(article_id);
  const { article, isLoading } = useArticle(article_id);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
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
          Votes: {article.votes + voteCount}
          <button onClick={incVotes} className="button__circle button__green">
            +
          </button>
          <button onClick={decVotes} className="button__circle button__red">
            -
          </button>
        </p>
        <ExpandComments article={article}>
          <ExpandAddComment>
            <AddComment article_id={article_id} />
          </ExpandAddComment>
          <CommentsList article_id={article_id} />
        </ExpandComments>
      </div>
    </section>
  );
};

export default Article;
