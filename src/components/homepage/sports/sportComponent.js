import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Messi from "../../../assets/images/messi.jpg";
import Tomori from "../../../assets/images/tomori.jpg";
import Lebron from "../../../assets/images/lebron.jpg";
import Boxing from "../../../assets/images/boxing.png";
import "./sport.css";

export class sportComponent extends Component {
  render() {
    return (
      <div className="sport">
        <div className="container-fluid shadow-sm">
          <h3>SPORTS </h3>
          <div className="container-fluid mt-3 mb-3 py-2 d-flex row sport-card-wrap">
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="sport-crd">
                  <Card.Img
                    variant="top"
                    src={Tomori}
                    className="sprt-crd-img"
                  />
                  <Card.Body className="sprt-txt">
                    <Card.Text>
                      Milan announced the signing of Fikayo Tomori on a
                      six-month loan
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="sport-crd">
                  <Card.Img
                    variant="top"
                    src={Lebron}
                    className="sprt-crd-img"
                  />
                  <Card.Body className="sprt-txt">
                    <Card.Text>
                      LeBron James opens school for challenged youth in hometown
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="sport-crd">
                  <Card.Img
                    variant="top"
                    src={Messi}
                    className="sprt-crd-img"
                  />
                  <Card.Body className="sprt-txt">
                    <Card.Text>
                      Lionel Messi Self-Isolating During Coronavirus Pandemic
                      with Barcelona on Break
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="sport-crd">
                  <Card.Img
                    variant="top"
                    src={Boxing}
                    className="sprt-crd-img"
                  />
                  <Card.Body className="sprt-txt">
                    <Card.Text>
                      Tyson Fury vs Anthony Joshua debate: Who wins heavyweight
                      showdown?
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default sportComponent;
