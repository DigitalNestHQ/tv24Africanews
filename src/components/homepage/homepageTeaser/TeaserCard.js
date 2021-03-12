import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const TeaserCard = ({ featured_image, id, slug, category_id }) => {
  return (
    <div className="col-sm-3 my-2 ts-card-wrap" data-aos="fade-right">
      <Link
        to={{
          pathname: "/news/categories",
          search: `?category=${category_id}`,
        }}
      >
        <Card className="text-white mt-wrap h-100">
          <Card.Img
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            alt="Card image"
            className="h-100"
          />
          <Card.ImgOverlay className="m-t text-center ts-overlay">
            <Button variant="outline-danger" className="butn">
              {category_id}
            </Button>
            <Card.Text className="ts-card-txt">
              <Link to={`/post/${slug}`} className="ts-card-txt text-white">
                {slug.toLowerCase()}
              </Link>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </div>
  );
};

export default TeaserCard;
