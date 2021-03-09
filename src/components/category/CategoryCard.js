import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ post_title, featured_image, id, post_type, slug }) => {
  return (
    <div className="category-news-card">
      <a href={`/post/${slug}`}>
        <Card className="news-crd">
          { post_type  === "premium" ? (
            <span>{post_type}</span>
          ) : (
            null
          )}

          <Card.Img
            variant="top"
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            className="news-card-img"
          />
          <Card.Body>
            <Link className="news-categ-link" to={`/post/${slug}`}><Card.Text className="news-card-caption">{post_title.slice(0, 50)+"..."}</Card.Text></Link>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
};
export default CategoryCard;
