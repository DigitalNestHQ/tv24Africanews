import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ post_title, featured_image, id, post_type, slug }) => {
  return (
    <div className="main-section-card card-only">
      <div className="image">
        <img
          src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
          alt={id}
        />
      </div>

      <div className="card-caption">
        <h3 className="card-caption-title">
          {" "}
          {post_title.toLowerCase().slice(0, 100)}{" "}
        </h3>
        <Link to={`/post/${slug}`}>
          <p className="card-caption-content">
            {" "}
            {slug.toLowerCase()} <span>Read more...</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
export default CategoryCard;
