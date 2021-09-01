import { useEffect, useState } from "react";
import { getArticle } from "../api";

export const useArticle = (article_id) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return { article, isLoading };
};
