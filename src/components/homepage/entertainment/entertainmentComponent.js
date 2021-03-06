import React from "react";
import Rmd from "../../../assets/images/rmd.jpg";
import Drake from "../../../assets/images/drake.jpg";
import Marlian from "../../../assets/images/marlian.jpg";
import Bboy from "../../../assets/images/burnaboy.jpg";
import { Card } from "react-bootstrap";
import "./entertainment.css";

const lifestyle = () => {
  return (
    <div className="entertainment">
      <h3 className="text-center py-2">ENTERTAINMENT</h3>
      <div className="container-fluid ent-chng-pos">
        <div className="container-fluid row w-100 bg-white mx-auto ent-pos-tp">
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={Rmd} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  RMD TALKS <br /> ABOUT AGING
                </Card.Text>
              </Card.ImgOverlay>
              <a href="http://facebook.com">
                {" "}
                RMD – Biography Of An Iconic Nigerian Actor, Richard Mofe-Damijo
              </a>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={Drake} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  DRAKE TALKS <br /> BUSINESS
                </Card.Text>
              </Card.ImgOverlay>
              <a href="http://facebook.com">
                {" "}
                Drake Praises Young Nigerian Artist Hyzah Who Went Viral: 'U Are
                Amazing'
              </a>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={Marlian} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text>NAIRA MARLEY</Card.Text>
              </Card.ImgOverlay>
              <a href="http://facebook.com">
                {" "}
                Azeez Adeshina Fashola (born 10 May 1991), known professionally
                as Naira Marley, is a Nigerian singer and songwriter.
              </a>
            </Card>
          </div>
          <div className="col-sm-3 my-2 mg-sm-scr">
            <Card className="bg-dark text-white mt-wrap">
              <Card.Img src={Bboy} alt="Card image" className="ent-h-100" />
              <Card.ImgOverlay className="overl">
                <Card.Text className="">
                  BURNA <br /> BOY
                </Card.Text>
              </Card.ImgOverlay>
              <a href="http://facebook.com">
                {" "}
                Damini Ebunoluwa Ogulu (born 2 July 1991), known professionally
                as Burna Boy, is a Nigerian singer, songwriter, rapper and
                dancer.{" "}
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lifestyle;
