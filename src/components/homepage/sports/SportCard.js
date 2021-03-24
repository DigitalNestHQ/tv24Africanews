import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SportCard = ({ post_title, featured_image, slug, category_id }) => {
  return (
    <div className="col-lg-3 col-sm-12 sport-sec">
      <Card className="sport-crd">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=${category_id}`,
          }}
        >
          <Card.Img
            variant="top"
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            className="sprt-crd-img"
          />
        </Link>
        <Card.Body className="sprt-txt">
          <Link to={`/post/${slug}`}>
            <Card.Text>{post_title.toLowerCase()}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default SportCard;
