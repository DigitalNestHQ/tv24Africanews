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
      <div className="politics-wrap container-fluid my-4">
        <h3>POLITICS\GOVERNANCE</h3>
        <div className="container-fluid my-3 p-2 d-flex row mx-auto">
          <div className="col-sm-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <label>Premium</label>
                <Card.Img variant="top" src={Obaseki} className="news-card-img" />
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    Market women applaud dismissal of alleged forgery case
                    against Obaseki
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <label className="color-red">Premium</label>
                <Card.Img variant="top" src={Bagudu} className="news-card-img"/>
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    APC may lose Kebbi in 2023, say stakeholders
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <label className="color-red">Premium</label>
                <Card.Img variant="top" src={Dogara} className="news-card-img"/>
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    Dogara, Mohammed’s reunion and ‘Fayemi treatment’ for Bala
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <label className="color-red">Premium</label>
                <Card.Img variant="top" src={Hope} className="news-card-img"/>
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    Imo APC’s steady slide into the ‘valley of death’
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <Card.Img variant="top" src={Kola} className="news-card-img"/>
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    2023: PDP charges Buhari, APC to strengthen nation’s
                    democratic institutions
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <Card.Img variant="top" src={IVP} className="news-card-img"/>
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    Dogara, Mohammed’s reunion and ‘Fayemi treatment’ for Bala
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <Card.Img variant="top" src={Dogara} className="news-card-img"/>
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    Ivory Coast election: opposition candidates calls for “civil
                    disobedience
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div className="col-sm-3 mt-3 news-sec my-2">
            <a href="/">
              <Card className="news-crd">
                <Card.Img variant="top" src={Obaseki} className="news-card-img"/>
                <Card.Body>
                  <Card.Text className="news-card-caption">
                    Sudan’s govt rejects sovereign council’s move to create new
                    body
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
