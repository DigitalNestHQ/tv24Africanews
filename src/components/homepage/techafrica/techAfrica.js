import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Microscope from "../../../assets/images/top_lab.jpg";
import Truck from "../../../assets/images/cybertruck1.jpg";
import Telescope from "../../../assets/images/tech2.jpg";
import "./tech.css";

class TechAfrica extends Component {
  render() {
    return (
      <div className="tech">
        <h3>TECH AFRICA</h3>
        <div className="tech-top">
          <div className="tech-top-left"></div>
          <div className="tech-top-right"></div>
        </div>
        <div className="tech-bottom">
          <div className="tech-bottom-left">
            <div className="tech-sq tech-sq-1">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd">
                  <Card.Img
                    variant="top"
                    src={Telescope}
                    className="tech-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="tech-crd-caption">
                      The secret to moving this ancient sphinx screening
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="tech-sq tech-sq-2">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd">
                  <Card.Img
                    variant="top"
                    src={Microscope}
                    className="tech-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="tech-crd-caption">
                      How Lab Courses Can Teach More Than Science
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="tech-sq tech-sq-3">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd">
                  <Card.Img
                    variant="top"
                    src={Truck}
                    className="tech-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="tech-crd-caption">
                      Elon Musk unveils Tesla's Cybertruck electric off-road
                      vehicle
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
          <div className="tech-top-right left-equiv"></div>
        </div>
      </div>
    );
  }
}

export default TechAfrica;
