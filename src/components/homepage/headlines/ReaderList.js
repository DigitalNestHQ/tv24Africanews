import React from "react";
import { Link } from "react-router-dom";
const ReaderList = ({ slug, post_title }) => {
  return (
    <article className="news_article">
      <Link to={`/post/${slug}`}>
        {post_title}
        <span>Live</span>
      </Link>
    </article>
  );
};
export default ReaderList;
