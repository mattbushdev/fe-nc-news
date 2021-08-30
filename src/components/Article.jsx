import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../api";
import CommentsList from "./CommentsList";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => setArticle(article));
  }, [article_id]);

  return (
    <section>
      <h3>{article.title}</h3>
      <Link to={`/articles/${article.topic}`}>
        <button>{article.topic}</button>
      </Link>
      <p>Author: {article.author}</p>
      <p>Created: {article.created_at}</p>
      <div>
        <p>{article.body}</p>
        <button>Votes: {article.votes}</button>
        <button className="button__circle button__green">+</button>
        <button className="button__circle button__red">-</button>
        <p>Comments: {article.comment_count}</p>
        <CommentsList article_id={article_id} />
      </div>
    </section>
  );
};

export default Article;
