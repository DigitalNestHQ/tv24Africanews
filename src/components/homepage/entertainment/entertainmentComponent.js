import React from "react";
import Image1 from "../../../assets/images/tech_1.jpg";
import Image2 from "../../../assets/images/athletic.jpg";
import Image3 from "../../../assets/images/tech2.jpg";
import Image4 from "../../../assets/images/travel1.jpg";
import { Card, Button } from "react-bootstrap";
import "./entertainment.css";

const lifestyle = () => {
  return (
    <div className="entertainment">
      <h3 className="text-center py-2">ENTERTAINMENT</h3>
      <div className="container-fluid ent-chng-pos">
        <div className="container row w-100 bg-white mx-auto ent-pos-tp">
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap h-100">
              <Card.Img src={Image1} alt="Card image" className="h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  RMD TALKS <br /> ABOUT AGING
                </Card.Text>
              </Card.ImgOverlay>
            <a href="http://facebook.com"> RMD: Biography of an Iconic Nigerian actor Richard</a>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap h-100">
            <Card.Img src={Image1} alt="Card image" className="h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  DRAKE TALKS <br /> BUSINESS
                </Card.Text>
              </Card.ImgOverlay>
            <a href="http://facebook.com"> Drake Praises young Nigerian artist who went viral...</a>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
          <Card className="bg-dark text-white mt-wrap h-100">
            <Card.Img src={Image1} alt="Card image" className="h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  NAIRA MARLEY
                </Card.Text>
              </Card.ImgOverlay>
            <a href="http://facebook.com"> Drake Praises young Nigerian artist who went viral...</a>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
          <Card className="bg-dark text-white mt-wrap h-100">
            <Card.Img src={Image1} alt="Card image" className="h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  BURNA BOY
                </Card.Text>
              </Card.ImgOverlay>
            <a href="http://facebook.com"> Drake Praises young Nigerian artist who went viral...</a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lifestyle;
