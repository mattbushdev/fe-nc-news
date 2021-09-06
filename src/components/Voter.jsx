import { useState } from "react";
import thumbup from "../icons/thumb-up.svg";
import thumbdown from "../icons/thumb-down.svg";

const Voter = ({ id, votes, setState, patchFunction }) => {
  const [hasErrored, setHasErrored] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const incVotes = () => {
    setHasErrored(false);
    if (hasVoted === false) {
      setState((currState) => {
        if (Array.isArray(currState)) {
          const newState = currState.map((comment) => {
            let newComment = { ...comment };
            if (newComment.comment_id === id) {
              newComment.votes += 1;
            }
            return newComment;
          });
          return newState;
        } else {
          let newObject = { ...currState };
          newObject.votes += 1;
          return newObject;
        }
      });
      setHasVoted(true);
      patchFunction(id, 1).catch(() => {
        setHasErrored(true);
        setState((currObject) => {
          let newObject = { ...currObject };
          newObject.votes -= 1;
          return newObject;
        });
      });
    }
  };

  const decVotes = () => {
    setHasErrored(false);
    if (!hasVoted) {
      setState((currState) => {
        if (Array.isArray(currState)) {
          const newState = currState.map((comment) => {
            let newComment = { ...comment };
            if (newComment.comment_id === id) {
              newComment.votes -= 1;
            }
            return newComment;
          });
          return newState;
        } else {
          let newObject = { ...currState };
          newObject.votes -= 1;
          return newObject;
        }
      });
      setHasVoted(true);

      patchFunction(id, -1).catch(() => {
        setHasErrored(true);

        setState((currObject) => {
          let newObject = { ...currObject };
          newObject.votes += 1;
          return newObject;
        });
      });
    }
  };

  return (
    <>
      {hasErrored && <p>Error, please try again later...</p>}
      <button onClick={incVotes} className="button__thumb-up">
        <img
          src={thumbup}
          alt="thumb up icon to up-vote"
          className="icon__thumb-up"
        />
      </button>
      <button onClick={decVotes} className="button__thumb-down">
        <img src={thumbdown} alt="thumb down icon to down-vote" />
      </button>
      {hasVoted && <p className="vote__accept">vote accepted</p>}
    </>
  );
};

export default Voter;
