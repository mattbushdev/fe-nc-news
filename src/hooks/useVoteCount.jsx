import { useState } from "react";
import { patchVotes } from "../api";

export const useVoteCount = (article_id) => {
  const [voteCount, setVoteCount] = useState(0);
  const [hasErrored, setHasErrored] = useState(false);

  const incVotes = () => {
    setHasErrored(false);

    setVoteCount((currVoteChange) => {
      return currVoteChange + 1;
    });

    patchVotes(article_id, 1).catch(() => {
      setHasErrored(true);
      setVoteCount((currVoteChange) => {
        return currVoteChange - 1;
      });
    });
  };

  const decVotes = () => {
    setHasErrored(false);

    setVoteCount((currVoteChange) => {
      return currVoteChange - 1;
    });

    patchVotes(article_id, -1).catch(() => {
      setHasErrored(true);
      setVoteCount((currVoteChange) => {
        return currVoteChange + 1;
      });
    });
  };

  return { voteCount, setVoteCount, decVotes, incVotes, hasErrored };
};
