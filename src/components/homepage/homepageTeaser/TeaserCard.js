import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
// import "../homepage.css";
const TeaserCard = ({ featured_image, id, slug, category_id }) => {
  const history = useHistory();
  return (
    <div className="col-sm-3 my-2 ts-card-wrap" data-aos="fade-right">
      <a href={`/post/${slug}`}>
        <Card className="text-white mt-wrap h-100">
          <Card.Img
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            alt="Card image"
            className="h-100"
          />
          <Card.ImgOverlay className="m-t text-center ts-overlay">
          
            <Button
              variant="outline-danger"
              className="butn"
              onClick={() =>
                history.push("/categories", {
                  category_id: category_id,
                })
              }
            >
              {category_id}
            </Button>

            <Card.Text className="ts-card-txt">
              <Link to={`/post/${slug}`} className="ts-card-txt text-white">
                <p>{slug.toLowerCase()}</p>
              </Link>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </a>
    </div>
  );
};

export default TeaserCard;
