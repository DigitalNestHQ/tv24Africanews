import React, { Component } from "react";
import ImageAme from "../../../assets/images/american-protest.jpg";
import { Image } from "react-bootstrap";
import "./headline.css";

export class headlineComponent extends Component {
  render() {
    return (
      <div className="hl-wrapper">
        <div className="container-fluid">
          <div className="row container-fluid">
            <div className="col-sm-8 ns-txt-wrap">
              <div className="container-fluid row mb-3 bt-red">
                <div className="col-sm-6 ns-txt">
                  <span>PREMIUM</span>
                  <a href="/" className="text-bold news-hd">
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, doloremque.
                    </p>
                  </a>
                </div>
                <div className="col-sm-2">
                  <a href="/">
                    <Image src={ImageAme} rounded className="hd-img" />
                  </a>
                </div>
              </div>
              <div className="container-fluid row mb-3 bt-red">
                <div className="col-sm-6 ns-txt">
                  <span>PREMIUM</span>
                  <a href="/" className="text-bold news-hd">
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, doloremque.
                    </p>
                  </a>
                </div>
                <div className="col-sm-2">
                  <a href="/">
                    <Image src={ImageAme} rounded className="hd-img" />
                  </a>
                </div>
              </div>
              <div className="container-fluid row mb-3 bt-red">
                <div className="col-sm-6 ns-txt">
                  <span>PREMIUM</span>
                  <a href="/" className="text-bold news-hd">
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, doloremque.
                    </p>
                  </a>
                </div>
                <div className="col-sm-2">
                  <a href="/">
                    <Image src={ImageAme} rounded className="hd-img" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-1"></div> */}
            <div className="col-sm-4 ns-art-wrap">
              <h2>MUST READ</h2>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden says Trumph's inpeachment is a decision of congress:{" "}
                  <span>Live</span>
                </a>
              </article>
              <div className="ads">
                <span>Ads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default headlineComponent;
