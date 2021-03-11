import React from "react";
import { Card } from "react-bootstrap";
const LifeStyleCard = ({ featured_image, category_id }) => {
  return (
    <div className="col-sm-3 my-2 mg-sm-scr">
      <Card className="bg-dark text-white mt-wrap">
        <Card.Img src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`} alt="Card image" className="ent-h-100" />
        <Card.ImgOverlay className="overl">
          <Card.Text className="">
            { category_id}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default LifeStyleCard