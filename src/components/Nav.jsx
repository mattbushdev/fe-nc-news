import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const Nav = ({ setFilters }) => {
  const [topics, setTopics] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getTopics().then((topicsList) => {
      setTopics(topicsList);
    });
  }, []);

  const handleTopic = ({ target: { value } }) => {
    setSelected(value);
    setFilters((currFilters) => {
      let newFilters = { ...currFilters };
      newFilters.topic = value;
      return newFilters;
    });
  };

  const handleAll = () => {
    setSelected(null);
    setFilters((currFilters) => {
      let newFilters = { ...currFilters };
      newFilters.topic = null;
      return newFilters;
    });
  };

  return (
    <nav>
      <Link to="/">
        <button
          className="button__nav"
          onClick={handleAll}
          className={selected ? "button__nav" : "button__nav--select"}
        >
          All
        </button>
      </Link>
      {topics.map((topic) => {
        return (
          <Link to={`/articles/${topic.slug}`} key={topic.slug}>
            <button
              value={topic.slug}
              className={
                selected === topic.slug ? "button__nav--select" : "button__nav"
              }
              onClick={handleTopic}
            >
              {topic.slug}
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
