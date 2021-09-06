import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const Nav = ({ setFilters }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsList) => {
      setTopics(topicsList);
    });
  }, []);

  const handleTopic = ({ target: { value } }) => {
    setFilters((currFilters) => {
      let newFilters = { ...currFilters };
      newFilters.topic = value;
      return newFilters;
    });
  };

  const handleAll = () => {
    setFilters((currFilters) => {
      let newFilters = { ...currFilters };
      newFilters.topic = null;
      return newFilters;
    });
  };

  return (
    <>
      <nav>
        <Link to="/" className="nav__list">
          <button className="button__nav" onClick={handleAll}>
            All
          </button>
        </Link>
        {topics.map((topic) => {
          return (
            <Link
              to={`/articles/${topic.slug}`}
              className="nav__list"
              key={topic.slug}
            >
              <button
                value={topic.slug}
                className="button__nav"
                onClick={handleTopic}
              >
                {topic.slug}
              </button>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
