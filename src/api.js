import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api.azurewebsites.net/api",
});

export const getArticles = async ({ topic, sort_by, order }) => {
  const { data } = await newsApi.get("/articles", {
    params: { topic, sort_by, order },
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
  const { data } = await newsApi.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const getUser = async (username) => {
  const { data } = await newsApi.get(`/users/${username}`);
  return data.user;
};

export const patchVotes = async (article_id, increment) => {
  const { data } = await newsApi.patch(`/articles/${article_id}`, {
    inc_votes: increment,
  });
  return data.article;
};

export const postComment = async (article_id, name, comment) => {
  const { data } = await newsApi.post(`/articles/${article_id}/comments`, {
    username: name,
    body: comment,
  });
  return data.comment;
};

export const patchCommentVotes = async (comment_id, increment) => {
  const { data } = await newsApi.patch(`/comments/${comment_id}`, {
    inc_votes: increment,
  });
  return data.comment;
};

export const deleteComment = async (comment_id) => {
  return await newsApi.delete(`/comments/${comment_id}`);
};
