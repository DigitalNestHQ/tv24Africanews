import React, { useContext, useState } from "react";
import authContext from "../../context/auth/authContext";
import "./allNews.css";
import { postNewComment } from '../../context/news/NewsApi'

const CommentForm = (props) => {
  const userContext = useContext(authContext);
  const { isAuthenticated } = userContext;
  const [newComment, setNewComment] = useState({
    name: '',
    comment: '',
    post_id: props.post_id,
    post_title: props.post_title,
  });

  const handleChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault()
    postNewComment(newComment)
    console.log(newComment)
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {
        !isAuthenticated && (
          <>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" minLength="2" onChange={handleChange} required/>
            {/* Email not included in the endpoint params */}
            {/* <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange}/> */}
          </>
        )
      }
        <label htmlFor="comment">Your Comment</label>
        <textarea
        name="comment"
        id="comment"
        cols="5"
        rows="4"
        placeholder="Write comment"
        onChange={handleChange}
        ></textarea>
        <input type="submit" value="Add Comment" className="btn-submit" />
    </form>
  );
};

export default CommentForm;
