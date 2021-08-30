import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-service-backend.herokuapp.com/api",
});

export const getArticles = async (topic) => {
  const { data } = await newsApi.get("/articles", {
    params: { topic: topic },
  });
  return data.articles;
};

export const getArticle = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article;
};

export const getTopics = async () => {
  const { data } = await newsApi.get("/topics");
  return data.topics;
};

export const getComments = async (article_id) => {
  console.log(article_id, "<-- API request");
  const { data } = await newsApi.get(`/articles/${article_id}/comments`);
  return data.comments;
};
