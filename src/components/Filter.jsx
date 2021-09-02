import { useEffect } from "react";
import { getArticles } from "../api";
import { useArticles } from "../hooks/useApi";

const Filter = ({ filters, setFilters }) => {
  const { setArticles } = useArticles(filters);

  const handleFilter = ({ target: { value } }) => {
    setFilters((currFilters) => {
      let newFilters = { ...currFilters };
      newFilters.sort_by = value;
      console.log(newFilters, "filter");

      return newFilters;
    });
  };
  const handleOrder = ({ target: { value } }) => {
    setFilters((currFilters) => {
      let newFilters = { ...currFilters };
      newFilters.order = value;
      console.log(newFilters, "order");

      return newFilters;
    });
  };

  useEffect(() => {
    getArticles(filters).then((articles) => setArticles(articles));
  }, [filters, setArticles]);

  return (
    <div className="filter">
      <label>
        <select name="sort_by" id="sort_by-select" onChange={handleFilter}>
          <option value="created_at">Recent</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        <select
          name="order"
          id="order-select"
          onChange={handleOrder}
          className="order"
        >
          <option value="desc">desc</option>
          <option value="asc">asc</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
