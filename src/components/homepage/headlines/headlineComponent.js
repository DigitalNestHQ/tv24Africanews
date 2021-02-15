import React, { Component } from "react";
import ImageAme from "../../../assets/images/american-protest.jpg";
import SafricaExplosion from "../../../assets/images/safricaexplo.jpg";
import Soldeir from "../../../assets/images/soldier.jpg";
import { Image } from "react-bootstrap";
import "./headline.css";

export class headlineComponent extends Component {
  render() {
    return (
      <div className="hl-wrapper">
        <div className="container-fluid hl-tp-cont mx-auto">
          <div className="row container-fluid mx-auto">
            <div className="col-sm-9 ns-txt-wrap">
              <div className="container-fluid news-bg-wrapper">
                <div className="shadow-sm row mb-3 bt-red bg-var-blue">
                  <div className="col-sm-6 ns-txt">
                    <a href="/" className="text-bold news-hd">
                      <h3>
                        US police officer dies of wounds after clash with
                        pro-Trump mob.
                      </h3>
                      <p>
                        Officer Brian D Sicknick died on Thursday due to
                        injuries sustained during clashes with rioters at the
                        Capitol.
                      </p>
                    </a>
                  </div>
                  <div className="col-sm-3 hd-img-wrap">
                    <a href="/">
                      <Image src={ImageAme} rounded className="hd-img" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="container-fluid news-bg-wrapper">
                <div className="shadow-sm row mb-3 bt-red bg-var-blue">
                  <div className="col-sm-6 ns-txt">
                    <a href="/" className="text-bold news-hd">
                      <h3>Seven injured in South Africa refinery explosion</h3>
                      <p>
                        Seven people were injured in an explosion at a South
                        African crude oil refinery in Durban on Friday, but no
                        deaths have been reported, a spokesman for the
                        KwaZulu-Natal
                      </p>
                    </a>
                  </div>
                  <div className="col-sm-3 hd-img-wrap">
                    <a href="/">
                      <Image src={SafricaExplosion} rounded className="hd-img" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="container-fluid news-bg-wrapper">
                <div className="shadow-sm row mb-3 bt-red bg-var-blue ">
                  <div className="col-sm-3 col-md-6 ns-txt">
                    <a href="/" className="text-bold news-hd">
                      <h3>
                        Nine killed in armed attack on wake in central Mexico
                      </h3>
                      <p>
                        Guanajuato is at the centre of a turf war between rival
                        organised crime groups in which thousands have been
                        killed.
                      </p>
                    </a>
                  </div>
                  <div className="col-sm-3 hd-img-wrap">
                    <a href="/">
                      <Image src={ Soldeir} rounded className="hd-img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ns-art-wrap mx-auto shadow">
              <h2>MUST READ</h2>
              <article className="news_article">
                <a href="/">
                  Biden says Trump impeachment is a ‘decision for Congress’:
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Biden: ‘It’s a good thing’ Trump is skipping inauguration
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Pelosi urges US general to block Trump from nuclear codes
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  China says US facing ‘internal collapse’ after pro-Trump riot
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Trump’s incitement, plan to skip inauguration recalls Civil
                  War
                  <span>Live</span>
                </a>
              </article>
              <article className="news_article">
                <a href="/">
                  Iran’s IRGC unveils underground missile base amid US tensions
                </a>
              </article>
              <article className="news_article">
                <a href="/">The delusion of American exceptionalism</a>
              </article>
              <article className="news_article">
                <a href="/">
                  Woman who falsely accused Black teen of theft is arrested
                </a>
              </article>
              <article className="news_article">
                <a href="/">The day Trump finally lost it</a>
              </article>
              <article className="news_article">
                <a href="/">
                  ‘Major incident’ in London as number of COVID patients soars
                </a>
              </article>
              <div className="shadow-sm ads">
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
