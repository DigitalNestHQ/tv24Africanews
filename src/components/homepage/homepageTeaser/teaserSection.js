import React from "react";
import Image1 from "../../../assets/images/tech_1.jpg";
import Image2 from "../../../assets/images/athletic.jpg";
import Image3 from "../../../assets/images/calabar-carnival-3.jpg";
import Image4 from "../../../assets/images/travel1.jpg";
import { Card, Button } from "react-bootstrap";

import "../homepage.css";

const teaserSection = () => {
  return (
    <div className="teaser mt-3 mb-3 mx-auto">
      <div className="row container-fluid mx-auto">
        <div className="col-sm-3 my-2 ts-card-wrap">
          <Card className="text-white mt-wrap h-100">
            <Card.Img src={Image1} alt="Card image" className="h-100" />
            <Card.ImgOverlay className="m-t text-center ts-overlay">
              <Button variant="outline-danger" className="butn">
                Tech
              </Button>

              <Card.Text className="ts-card-txt">
                Labs by ARM 3.0 is designed to engage post-MVP FinTech startups
                in a series of activities aimed at exponentially advancing
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div
          className="col-sm-3 mt-2 mb-2 ts-card-wrap"
          style={{ backgroundColor: "none" }}
        >
          <Card className="text-white h-100">
            <Card.Img src={Image2} alt="Card image" className="h-100 w-100" />
            <Card.ImgOverlay className="m-t text-center ts-overlay">
              <Button variant="outline-danger" className="butn">
                Sport
              </Button>

              <Card.Text className="ts-card-txt">
                Watch the best live coverage of your favourite sports: Football,
                Golf, Rugby, Cricket, Tennis, F1, Boxing, plus the latest sports
                news, transfers & scores.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-sm-3 mt-2 mb-2 ts-card-wrap">
          <Card className="text-white mt-wrap h-100">
            <Card.Img src={Image4} alt="Card image" className="h-100" />
            <Card.ImgOverlay className="m-t text-center ts-overlay">
              <Button variant="outline-danger" className="butn">
                Travel
              </Button>
              <Card.Text className="ts-card-txt">
                Travelstart is Africa's leading online travel agency. Based in
                sunny Cape Town, we have offices across Africa and the Middle
                East where hundreds of Travelstarters
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-sm-3 mt-2 mb-2 ts-card-wrap">
          <Card className="text-white mt-wrap h-100">
            <Card.Img src={Image3} alt="Card image" className="h-100 bg-none" />
            <Card.ImgOverlay className="m-t text-center ts-overlay">
              <Button variant="outline-danger" className="butn">
                Event
              </Button>
              <Card.Text className="ts-card-txt">
                Calabar Carnival festival in Nigeria, also tagged "Africa's
                Biggest Street Party", was created as part of the vision of
                making the Cross River State, Nigeria, the ...
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default teaserSection;
