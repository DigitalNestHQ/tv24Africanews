import axios from "axios";
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getSportNews = async () => {
  try {
    const sports = await axios.get(
      "https://api.tv24africa.com/api/v1/categories?category=sports",
      config
    );
    const { data } = sports;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const categories = await axios.get(
      "https://api.tv24africa.com/api/v1/getcategories",
      config
    );
    const { data } = categories;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export const getNewsFeed = async () => {
  try {
    const feeds = await axios.get(
      "https://api.tv24africa.com/api/v1/posts",
      config
    );
    const { data } = feeds;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export const getSingleNews = async (slug) => {
  try {
    const feed = await axios.get(
      `https://api.tv24africa.com/api/v1/getpost/${slug}`,
      config
    );
    const { data } = feed;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
