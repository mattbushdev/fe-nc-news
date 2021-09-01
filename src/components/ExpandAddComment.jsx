import { useState } from "react";

const ExpandAddComment = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAddComment = () => {
    setIsOpen((currIsOpen) => !currIsOpen);
  };
  return (
    <div>
      <button className="button__add-comment" onClick={toggleAddComment}>
        {isOpen ? "Back" : "Add Comment"}
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export default ExpandAddComment;
