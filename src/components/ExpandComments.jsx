import { useState } from "react";
const ExpandComments = ({ children, article }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = () => {
    setIsOpen((currIsOpen) => !currIsOpen);
  };

  return (
    <div className="comments__list">
      <button className="button__comments" onClick={toggleComments}>
        {isOpen ? "Collapse Comments" : `${article.comment_count} Comments`}
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export default ExpandComments;
