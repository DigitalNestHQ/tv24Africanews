import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Obaseki from "../../../assets/images/Godwin-Obaseki.jpg";
import Bagudu from "../../../assets/images/Bagudu.jpg";
import Dogara from "../../../assets/images/dogara.jpg";
import Hope from "../../../assets/images/Hope-Uzodinma.jpg";
import Kola from "../../../assets/images/kola.jpg";
import IVP from "../../../assets/images/IV-opposition.jpg";
import "./politicsComponent.css";

export class politicsComponent extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="politics-wrap container-fluid">
        <h3>POLITICS/GOVERNANCE</h3>
        <div className="container-fluid mt-3 mb-3 p-2 d-flex row">
          <div className="col-sm-3 news-sec">
            <a href="/">
              <Card className="news-crd">
              <label>Premium</label>
                <Card.Img variant="top" src={Obaseki} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 news-sec">
            <a href="/">
              <Card className="news-crd">
              <label className="color-red">Premium</label>
                <Card.Img variant="top" src={Bagudu} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 news-sec">
            <a href="/">
              <Card className="news-crd">
              <label className="color-red">Premium</label>
                <Card.Img variant="top" src={Dogara} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 news-sec">
            <a href="/">
              <Card className="news-crd">
              <label className="color-red">Premium</label>
                <Card.Img variant="top" src={Hope} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec">
            <a href="/">
              <Card>
                <Card.Img variant="top" src={Kola} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec">
            <a href="/">
              <Card>
                <Card.Img variant="top" src={IVP} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec">
            <a href="/">
              <Card>
                <Card.Img variant="top" src={Dogara} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec">
            <a href="/">
              <Card>
                <Card.Img variant="top" src={Obaseki} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default politicsComponent;
