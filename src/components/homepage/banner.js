import React from "react";
// import { pageurl } from "../../../utils/constants";
import image1 from "../../assets/images/Electoral_College_Riot.jpg";
import image2 from "../../assets/images/IV-opposition.jpg";
import image4 from "../../assets/images/Sunday-Igboho-1.jpg";
import { Carousel } from "react-bootstrap";
import "./homepage.css";

function banner() {
  return (
    <div className="container-fluid flex-container">
      <div className="col-sm-8">
        <Carousel className="mt-3">
          <Carousel.Item className="caro-item">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption className="caro-capxn">
              <a
                href="/"
                className="text-decoration-none inline-block p-2 text-left cap-ancor"
              >
                US Capitol Hill Attack
              </a>
              <p className="text-white text-left car-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                modi.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="caro-item">
            <img className="d-block w-100" src={image2} alt="Third slide" />

            <Carousel.Caption className="caro-capxn">
              <a
                href="/"
                className="text-decoration-none inline-block p-2 text-left cap-ancor"
              >
                US Capitol Hill Attack
              </a>
              <p className="text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Labore, aspernatur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="caro-item">
            <img className="d-block w-100" src={image4} alt="Third slide" />

            <Carousel.Caption className="caro-capxn">
              <a
                href="/"
                className="text-decoration-none inline-block p-2 text-left cap-ancor"
              >
                US Capitol Hill Attack
              </a>
              <p className="text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Labore, aspernatur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-sm-4">
        <div className="cnt-1 mt-2 mb-2">
          <a
            href="/"
            className="text-decoration-none inline-block p-2 text-left cap-anco mt-5"
          >
            End Sars Protest
          </a>
          <p className="pl-2 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            provident?
          </p>
          {/* </div> */}
        </div>
        <div className="cnt-2 mt-2">
          <a
            href="/"
            className="text-decoration-none inline-block p-2 text-left cap-anco"
          >
            Mambilla Forest
          </a>
          <p className="pl-2 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            provident?
          </p>
        </div>
      </div>
    </div>
  );
}

export default banner;
