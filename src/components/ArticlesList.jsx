import { Link, useParams } from "react-router-dom";
import { useArticles } from "../hooks/useApi";
import coding from "../images/coding.jpg";
import football from "../images/football.jpg";
import cooking from "../images/cooking.jpg";
import calendar from "../icons/calendar.svg";

const ArticlesList = ({ user, filters }) => {
  const { topic } = useParams();
  const { articles, isLoading } = useArticles(filters);
  const images = { coding, football, cooking };

  const convertTime = (time) => {
    let date = new Date(time);
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <section className="articles">
      <ul className="articles__list">
        {articles.map((article) => {
          return (
            <Link
              to={`/article/${article.article_id}`}
              key={article.article_id}
            >
              <li className="articles__card">
                <div className="container__img">
                  <img
                    src={images[article.topic]}
                    alt={`${article.topic} topic`}
                  />
                </div>
                <div className="container__info">
                  <p>
                    <span className="span__color">{article.author}</span>
                    <span className="span__title">{article.title}</span>
                    <div className="articles__footer">
                      <span className="articles__date">
                        <img
                          src={calendar}
                          alt="calendar icon"
                          className="calendar"
                        />
                        {convertTime(article.created_at)}
                      </span>
                      <span className="articles__vote">
                        {article.votes} Votes
                      </span>
                    </div>
                  </p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
