import React, { Component } from "react";
import { Card, Image, Button } from "react-bootstrap";
import Mambilla from "../../../assets/images/Mambilla-Plateau.jpg";
import Uganda from "../../../assets/images/Tourism-Uganda.jpeg";
import Uganda2 from "../../../assets/images/wafrica1_cs.jpg";
import Calabar from "../../../assets/images/calabar-carnival-3.jpg";
import Obudu from "../../../assets/images/obudu.jpg";
import "./discoverAfrica.css";

export class discoverAfrica extends Component {
  render() {
    return (
      <div className="africa ">
        <h3>DISCOVER AFRICA</h3>
        <div className="container-fluid row af-bg-red ml-0">
          <div className="col-sm-6 af-col-tp my-2 mx-auto">
            <Card className="bg-dark text-white">
              <Card.Img src={Mambilla} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text></Card.Text>
                <Card.Text>MAMBILLA FOREST</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className=" col-md-6 mx-auto my-2 mx-auto">
                <a href="/">
                  <Card>
                    <Card.Img variant="top" src={Uganda2} className="da_img"/>
                  </Card>
                  <span>PREMIUM</span>
                      <p>Domestic tourism to prop up Rwanda tourism sector</p>                    
                </a>
              </div>
              <div className="col-md-6 mx-auto my-2 mx-auto">
                <a href="/">
                  <Card>
                    <Card.Img variant="top" src={Uganda} className="da_img"/>
                  </Card>
                  <span>PREMIUM</span>  
                  <p>What is killing Uganda's tourism potential?</p>
                </a>
              </div>
            </div>
            <div className="row">
              <div className=" col-md-6 mx-auto my-2">
                <a href="/">
                  <Card>
                    <Card.Img variant="top" src={Calabar}  className="da_img"/>
                  </Card>
                  <span>PREMIUM</span>
                  <p>Inside Calabar Carnival, africa's biggest street party</p>
                </a>
              </div>
              <div className=" col-md-6 mx-auto">
                <a href="/">
                  <Card>
                    <Card.Img variant="top" src={Obudu} className="da_img" />
                  </Card>
                  <span>PREMIUM</span>
                  <p>  Obudu Mountain resort (formerly obudu cattle ranch)</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default discoverAfrica;
