import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../api";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <section className="articles">
      <h2>Top Articles</h2>
      <ul className="articles__list">
        {articles.map((article) => {
          return (
            <Link
              to={`/article/${article.article_id}`}
              key={article.article_id}
            >
              <li className="articles__card">
                {article.title}
                <p>{article.author}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
