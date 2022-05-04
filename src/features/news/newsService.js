import axios from "axios";

const API_URL = "http://localhost:3005/";

const getAll = async () => {
  const res = await axios.get(API_URL + "news");
  return res.data;
};

const newsService = {
  getAll,
};

export default newsService;
