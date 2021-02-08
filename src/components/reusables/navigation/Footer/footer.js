import React from "react";
// import { pageurl } from "../../../utils/constants";
import { Card, Button, ListGroup } from "react-bootstrap";
import GooglePlayImg from "../../../../assets/images/googleplay.JPG";
import ApplePlayImg from "../../../../assets/images/apple-store.JPG";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper container-fluid">
      <footer className="footer">
        <div className="row">
          <div className="col-sm-3">
            <h3>categories</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis alias hic nam corporis doloribus magnam?
            </p>
                <Card.Link href="#">
                  <i className="fab fa-facebook"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="fab fa-twitter"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="fab fa-instagram"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="fab fa-youtube"></i>
                </Card.Link>

          </div>
          <div className="col-sm-3 ">
            <h3>categories</h3>
            <ul>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Apps</a>
              </li>
              <li>
                <a href="/">Newsletters</a>
              </li>
              <li>
                <a href="/">Channel Finder</a>
              </li>
              <li>
                <a href="/">TV Schedule</a>
              </li>
              <li>
                <a href="/">Podcasts</a>
              </li>
              <li>
                <a href="/contact">Submit a Tip</a>
              </li>
              <li>
                <a href="/works">Our Channels</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 ft-crd">
            <h3>company</h3>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Code of Ethics</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Cookie Policy</a>
              </li>
              <li>
                <a href="/">Cookie Preferences</a>
              </li>
              <li>
                <a href="/contact">Community Guidelines</a>
              </li>
              <li>
                <a href="/works">Work for us</a>
              </li>
              <li>
                <a href="/hr">HR quality</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h3 className="ps_p">DOWNLOAD APP</h3>
            <div className="app-store">
              <a href="/">
                <img src={GooglePlayImg} alt="google play" />{" "}
              </a>
              <a href="/">
                <img src={ApplePlayImg} alt="google play" />{" "}
              </a>
            </div>
            <small className="text-center">&copy;2021 TV24 Media Network</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
