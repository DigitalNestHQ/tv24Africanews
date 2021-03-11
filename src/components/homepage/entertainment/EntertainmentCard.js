import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const EntertainmentCard = ({
  featured_image,
  category_id,
  slug,
  post_title,
}) => {
  return (
    <div className="col-sm-3 my-2 mg-sm-scr">
      <Card className="bg-dark text-white mt-wrap">
        <Card.Img
          src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
          alt="Card image"
          className="ent-h-100"
        />
        <Card.ImgOverlay className="overl">
          <Card.Text className="">{category_id}</Card.Text>
        </Card.ImgOverlay>
        <Link to={`/post/${slug}`}>{post_title}</Link>
      </Card>
    </div>
  );
};

export default EntertainmentCard;
