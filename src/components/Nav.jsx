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
      {/* <h2>Topics</h2> */}
      {topics.map((topic) => {
        return (
          <Link to={`/articles/${topic.slug}`} className="topics__list">
            <h2 key={topic.slug}>{topic.slug}</h2>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
