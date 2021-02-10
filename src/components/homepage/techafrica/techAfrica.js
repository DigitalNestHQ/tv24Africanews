import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Microscope from "../../../assets/images/top_lab.jpg";
import Truck from "../../../assets/images/cybertruck1.jpg";
import Telescope from "../../../assets/images/tech2.jpg";
import "./tech.css";

export class techAfrica extends Component {
  render() {
    return (
      <div className="tech row container-fluid">
        <div className="container row m-auto">
       <h3>TECH AFRICA</h3>
          <div className=" col-sm-11 tech_bg"></div>
          <div className="d-flex row">
            <div className="col-sm-1"></div>
            <div className="col-sm-3 mb-2">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd">
                  <Card.Img variant="top" src={Telescope} />
                  <Card.Body>
                    <Card.Text>
                      The secret to moving this ancient screen
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 mb-2">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd">
                  <Card.Img variant="top" src={Microscope} />
                  <Card.Body>
                    <Card.Text>
                      How lab course can teach more than science. 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 mb-2">
              <a href="/" className="tch-anchor">
                <Card className="tech-crd">
                  <Card.Img variant="top" src={Truck} />
                  <Card.Body>
                    <Card.Text>
                      Elun Musk unveil new Cybertruck electric vehicle
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            {/* <div className="col-sm-1"></div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default techAfrica;
