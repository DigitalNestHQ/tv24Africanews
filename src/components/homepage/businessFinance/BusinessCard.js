import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const BusinessCard = ({
  post_title,
  featured_image,
  category_id,
  slug,
}) => {
  return (
    <div className="col-sm-4 bus-col-wrap bus-sec my-2 ">
      <Card className="bus-crd">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=${category_id}`,
          }}
        >
          <Card.Img
            variant="top"
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            className="bus-crd-img"
          />
        </Link>
        <Link to={`/post/${slug}`}>
          <Card.Body>
            <Card.Text className="bus-crd-caption">{post_title}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};
export default BusinessCard;
