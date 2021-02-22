import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Hyunda from "../../../assets/images/Hyunda.jpg";
import Opec from "../../../assets/images/opec.jpg";
import Amazon from "../../../assets/images/amazon.jpg";
import WorldBank from "../../../assets/images/wbank.jpg";

import "./business.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const business = () => {
  AOS.init()
  return (
    <div className="business my-4 container-fluid">
      <h3>BUSINESS AND FINANCE</h3>
      <div className=" shadow-sm row bs-col-wrap">
        <div className="col-sm-6 sme_bg"></div>
        <div className="col-sm-6 sme_rght">
          <h5>Bank highlights business support solutions</h5>
          <p>
            Modified date: November 27, 20200 The United Kingdom Trade Envoy to
            Nigeria, Hon. Helen Grant, has said that Nigeria was the fastest
            growing economy in Africa. Grant said this at...
          </p>
        </div>
      </div>
      <div className="row bus-article-wrap my-4 pl-0" data-aos="flip-right" data-aos-delay="100" data-aos-duration="1500">
        <div className="col-sm-3 bus-col-wrap bus-sec my-2 ">
          <a href="/">
            <Card className="bus-crd">
              <Card.Img variant="top" src={Amazon} className="bus-crd-img" />
              <Card.Body>
                <Card.Text className="bus-crd-caption">
                  Amazon Web Service to rescue unbanked Nigerians
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-sm-3 bus-col-wrap bus-sec my-2">
          <a href="/">
            <Card className="bus-crd">
              <Card.Img variant="top" src={WorldBank} className="bus-crd-img" />
              <Card.Body>
                <Card.Text className="bus-crd-caption">
                  Nigeria’s economy to grow by 1.1% this year, says World Bank
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-sm-3 bus-col-wrap bus-sec my-2">
          <a href="/">
            <Card className="bus-crd">
              <Card.Img variant="top" src={Opec} className="bus-crd-img" />
              <Card.Body>
                <Card.Text className="bus-crd-caption">
                  Nigeria’s December oil output below fiscal projection
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-sm-3 bus-col-wrap bus-sec my-2">
          <a href="/">
            <Card className="bus-crd">
              <Card.Img variant="top" src={Hyunda} className="bus-crd-img" />
              <Card.Body>
                <Card.Text className="bus-crd-caption">
                  Hyundai shares soar on Apple car talks reports
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
      <div className="bus-ad"></div>
    </div>
  );
};

export default business;
