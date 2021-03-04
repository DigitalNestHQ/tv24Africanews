import React from "react";
import { Card } from "react-bootstrap";

const politicsCard = ({ post_title, featured_image, id, post_type, slug }) => {
  return (
    <div className="col-sm-3 news-sec my-2">
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
            <Card.Text className="news-card-caption">{post_title}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
};
export default politicsCard;
