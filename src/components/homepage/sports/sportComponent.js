import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Messi from "../../../assets/images/messi.jpg";
// import Ronaldo from "../../../assets/images/ronaldo.jpg";
import Tomori from "../../../assets/images/tomori.jpg";
import Lebron from "../../../assets/images/lebron.jpg";
import Boxing from "../../../assets/images/boxing.png";
import "./sport.css"

export class sportComponent extends Component {
  render() {
    return (
      <div className="sport">
        <div className="container-fluid ">
          <h3>SPORTS</h3>
          <div className="container-fluid mt-3 mb-3 p-2 d-flex row">
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="news-crd">
                  <Card.Img variant="top" src={Messi} className="sprt-crd-img"/>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="sport-crd">
                  <Card.Img variant="top" src={Lebron} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="news-crd">
                  <Card.Img variant="top" src={Tomori} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-3 sport-sec">
              <a href="/">
                <Card className="news-crd">
                  <Card.Img variant="top" src={Boxing} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
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
