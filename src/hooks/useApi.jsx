import { useEffect, useState } from "react";
import { getArticle, getArticles } from "../api";

export const useArticles = (filters) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(filters).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [filters]);

  return { articles, setArticles, isLoading };
};

export const useArticle = (article_id) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleIdExists, setArticleIdExists] = useState(true);

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) setArticleIdExists(false);
      });
  }, [article_id]);

  return { article, setArticle, isLoading, articleIdExists };
};
