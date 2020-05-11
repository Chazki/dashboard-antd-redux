import axios from "axios";

axios.defaults.baseURL = "http://apistaging.todovaapp.cl/v2";

const Get = async (route, params = {}) => {
  try {
    const { data } = await axios.get(route, {
      params,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const Post = async (route, json = {}) => {
  try {
    const { data } = await axios.post(route, json);
    return data;
  } catch (error) {
    throw error;
  }
};

export { Get, Post };
