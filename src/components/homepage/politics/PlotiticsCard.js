import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const PoliticsCard = ({
  post_title,
  featured_image,
  id,
  post_type,
  slug,
  category_id,
}) => {
  console.log(category_id);
  return (
    <div className="col-sm-3 news-sec my-2 mx-auto">
      <Card className="news-crd">
        {post_type === "premium" ? <span>{post_type}</span> : null}
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=${category_id}`,
          }}
        >
          <button>
            <Card.Img
              variant="top"
              src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
              className="news-card-img"
            />
          </button>
        </Link>
        <Card.Body>
          <Link href={`/post/${slug}`}>
            <Card.Text className="news-card-caption">
              {post_title.toLowerCase()}
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default PoliticsCard;
