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

export const getCategories = async (category) => {
  try {
    const categories = await axios.get(
      `https://api.tv24africa.com/api/v1/categories?category=${category}`,
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


// get news comments
export const getNewsComments = async (slug) => {
  try{
    const comments = await axios.get(
      `http://api.tv24africa.com/api/v1/getcomment/${slug}`, config
      );
      const { data } = comments;
      return data;
  } catch(err){
    console.log(err);
  }
}


export const postNewComment = async (newComment) =>{{
  try{
    console.log(newComment)
    const res = await axios.post(`http://api.tv24africa.com/api/v1/comment/`, newComment, config);
    console.log('response from new comment', res)
  }catch(err){
    console.log('error from new comment', err)
  }
}}