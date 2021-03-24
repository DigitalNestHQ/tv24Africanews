import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PoliticsCard = ({
  post_title,
  featured_image,
  id,
  post_type,
  slug,
  category_id,
}) => {
  // console.log(category_id);
  return (
    <div className="card sec-2 col-lg-3 col-sm-12 my-2 mx-auto">
      <img src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}></img>
      <Link to={`/post/:${slug}`}>
          <p>{post_title.toLowerCase()}</p>
      </Link>
    </div>
  );
};
export default PoliticsCard;
