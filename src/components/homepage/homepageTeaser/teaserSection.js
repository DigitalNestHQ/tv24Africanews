import React from "react";
import Image1 from "../../../assets/images/tech_1.jpg";
import Image2 from "../../../assets/images/athletic.jpg";
import Image4 from "../../../assets/images/travel1.jpg";
import { Card, Button } from "react-bootstrap";
import "../homepage.css"

const teaserSection = () => {
  return (
    <div className="teaser mt-3 mb-3 mx-auto">
      <div className="row container-fluid mx-auto">
        <div className="col-sm-3 my-2 ts-card">
          <Card className="bg-dark text-white mt-wrap h-100">
            <Card.Img src={Image1} alt="Card image" className="h-100"/>
            <Card.ImgOverlay className="m-t text-center">
            <Button variant="outline-danger" className="butn">Tech</Button>

              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-sm-3 mt-2 mb-2">
          <Card className="bg-dark text-white mt-wrap h-100">
            <Card.Img src={Image2} alt="Card image" className="h-100"/>
            <Card.ImgOverlay className="m-t text-center">
            <Button variant="outline-danger" className="butn">Sport</Button>

              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-sm-3 mt-2 mb-2">
          <Card className="bg-dark text-white mt-wrap h-100">
            <Card.Img src={Image4} alt="Card image" />
            <Card.ImgOverlay className="m-t text-center">
            <Button variant="outline-danger" className="butn">Travel</Button>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-sm-3 mt-2 mb-2">
          <Card className="bg-dark text-white mt-wrap h-100">
            <Card.Img src={Image2} alt="Card image" className="h-100"/>
            <Card.ImgOverlay className="m-t text-center">

              <Button variant="outline-danger" className="butn">Event</Button>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default teaserSection;
