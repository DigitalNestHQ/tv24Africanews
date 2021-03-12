import React from "react";
import "./allNews.css";

const Comment = (props) => {
  return (
    <form className="comment-form">
      <label htmlFor="username">username</label>
      <input type="text" name="Username" required minLength="2" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required/>
      <label htmlFor="comment">Your Comment</label>
      <textarea
        name="comment"
        id="comment"
        cols="5"
        rows="4"
        placeholder="Write comment"
      ></textarea>
      <input type="submit" value="Add Post" className="btn-submit" />
    </form>
  );
};

export default Comment;
