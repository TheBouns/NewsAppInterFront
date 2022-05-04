import axios from "axios";

const API_URL = "http://localhost:3005/";

const register = async (userData) => {
  const res = await axios.post(API_URL + "user/register", userData);
  return res.data;
};

const authService = {
  register,
};

export default authService;
