import React from "react";
// import { pageurl } from "../../../utils/constants";
import image1 from "../../assets/images/Electoral_College_Riot.jpg";
import image2 from "../../assets/images/IV-opposition.jpg";
import image4 from "../../assets/images/Sunday-Igboho-1.jpg";
import { Carousel } from "react-bootstrap";
import "./homepage.css";

function banner() {
  return (
    <div className="container-fluid flex-container banner">
      <div className="col-sm-8 py-4 ">
        <Carousel className="mt-3 ">
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
                At first the commotion outside the Senate chamber sounded like a
                routine disturbance to the members inside, the kind of
                small-scale protest that often takes place at the Capitol.
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
                At first the commotion outside the Senate chamber sounded like a
                routine disturbance to the members inside, the kind of
                small-scale protest that often takes place at the Capitol.
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
                At first the commotion outside the Senate chamber sounded like a
                routine disturbance to the members inside, the kind of
                small-scale protest that often takes place at the Capitol.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-sm-4 py-4 mt-3">
        <div className="cnt-1">
          <div className="cnt-txt-wrap">
            <a
              href="/"
              className="text-decoration-none inline-block p-2  cap-anco text-left mt-5"
            >
              End Sars Protest
            </a>
            <p>Continues in Lagos</p>
          </div>
        </div>
        <div className="cnt-2">
          <div className="cnt-txt-wrap">
            <a
              href="/"
              className="text-decoration-none inline-block p-1 text-left cap-anco mt-5"
            >
              Mambilla Forest
            </a>
            <p>
              The Mambilla Forest is a plateau in the Taraba State of Nigeria
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;
