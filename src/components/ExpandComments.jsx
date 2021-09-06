import { useState } from "react";
import commentbubble from "../icons/comments.svg";

const ExpandComments = ({ children, article }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = () => {
    setIsOpen((currIsOpen) => !currIsOpen);
  };

  return (
    <div className="comments__list">
      <button className="button__comments" onClick={toggleComments}>
        <img
          src={commentbubble}
          alt="comment bubble icon"
          className="comment-bubble"
          width="15"
          height="15"
        />
        {isOpen ? "Collapse Comments" : `${article.comment_count} Comments`}
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export default ExpandComments;
