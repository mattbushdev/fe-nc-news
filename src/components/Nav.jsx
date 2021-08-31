import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  });

  return (
    <nav>
      {topics.map((topic) => {
        return (
          <Link to={`/articles/${topic.slug}`} className="nav__list">
            <button className="button__nav" key={topic.slug}>
              {topic.slug}
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
