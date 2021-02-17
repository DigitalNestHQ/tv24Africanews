import React from "react";
import SmilingBae from "../../../assets/images/theladies.jpg";
import BusTycoon from "../../../assets/images/thebusiness.jpg";
import Ibile from "../../../assets/images/thecap.jpg";
import Beauty from "../../../assets/images/thesmile.jpg";
import { Card } from "react-bootstrap";
import "./lifestyle.css";

const lifestyle = () => {
  return (
    <div className="lifestyle mt-3 mb-3 pt-3 pb-3">
      <h3 className="text-center py-2 text-white">LIFESTYLES</h3>
      <div className="container-fluid">
        <div className="container-fluid row mx-auto lf-wrap bg-white">
        <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={SmilingBae} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  THE <br /> LADIES
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={BusTycoon} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  THE <br /> BUSINESS
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={Ibile} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">MEN WHO<br /> WEAR CAP</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={Beauty} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  THE<br /> SMILE
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lifestyle;
