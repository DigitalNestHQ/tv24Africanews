import React from "react";
import Image1 from "../../../assets/images/tech_1.jpg";
import Image2 from "../../../assets/images/athletic.jpg";
import Image3 from "../../../assets/images/tech2.jpg";
import Image4 from "../../../assets/images/travel1.jpg";
import { Card, Button } from "react-bootstrap";
import "./lifestyle.css";

const lifestyle = () => {
  return (
    <div className="lifestyle mt-3 mb-3 pt-3 pb-3">
      <h3 className="text-center py-2 text-white">LIFESTYLES</h3>
      <div className="container-fluid">
        <div className="container row mx-auto lf-wrap bg-white">
          <div className="col-sm-3 my-2">
            <Card className="bg-dark text-white mt-wrap h-100">
              <Card.Img src={Image1} alt="Card image" className="h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">The ladies</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-3 my-2">
            <Card className="bg-dark text-white mt-wrap h-100">
              <Card.Img src={Image3} alt="Card image" />
              <Card.ImgOverlay className="overl">
                <Card.Text>The business talk</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-3 my-2">
            <Card className="bg-dark text-white mt-wrap h-100">
              <Card.Img src={Image4} alt="Card image" />
              <Card.ImgOverlay className="overl">
                <Card.Text>men who wear cap</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-3 my-2">
            <Card className="bg-dark text-white mt-wrap h-100">
              <Card.Img src={Image3} alt="Card image" className="h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text>The smile</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lifestyle;
