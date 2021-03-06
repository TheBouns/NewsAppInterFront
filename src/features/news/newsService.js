import axios from "axios";

const API_URL = "http://localhost:3005/";

const getAll = async () => {
  const res = await axios.get(API_URL + "news");
  return res.data;
};
const getAllArchived = async () => {
  const res = await axios.get(API_URL + "news/archived");
  return res.data;
};

const createArticle = async (data) => {
  const res = await axios.post(API_URL + "news", data);
  return res.data;
};
const archiveArticle = async (id) => {
  const res = await axios.put(API_URL + "news/" + id);
  return res.data;
};
const deleteArticle = async (id) => {
  const res = await axios.delete(API_URL + "news/delete/" + id);
  return res.data;
};
const getArticleByTitle = async (title) => {
  const res = await axios.get(API_URL + "news/find/" + title);
  return res.data;
};
const newsService = {
  getAll,
  getAllArchived,
  createArticle,
  archiveArticle,
  deleteArticle,
  getArticleByTitle,
};

export default newsService;
