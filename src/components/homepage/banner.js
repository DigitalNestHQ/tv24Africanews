import React, { Component } from "react";
// import { pageurl } from "../../../utils/constants";
import image1 from "../../assets/images/Electoral_College_Riot.jpg";
import image2 from "../../assets/images/IV-opposition.jpg";
import image4 from "../../assets/images/Sunday-Igboho-1.jpg";
import { getNewsFeed } from "../../context/news/NewsApi";
import { Carousel } from "react-bootstrap";
import CarouselCard from "./CarouselCard";
import "./homepage.css";

class Banner extends Component {
  render() {
   const feeds = this.props.data;
   const firstFeed = Array.isArray(feeds) && feeds.length ? feeds[0] : {};
   const secondFeed = Array.isArray(feeds) && feeds.length ? feeds[1] : {};
    return (
      <div className="container-fluid flex-container banner">
        <div className="col-sm-8 py-4 ">
          <Carousel className="mt-3 ">
            {feeds  &&
              feeds.slice(0, 3).map((categ) => {
                const {
                  post_type,
                  post_title,
                  featured_image,
                  id,
                  slug,
                  category_id
                } = categ;
                return (
                   <Carousel.Item className="caro-item" key={id}>
                    <img className="d-block w-100" src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`} alt="First slide" />
                    <Carousel.Caption className="caro-capxn">
                          <a
                            href={`/post/${slug}`}
                            className="text-decoration-none inline-block p-2 text-left cap-ancor"
                          >
                            {category_id}
                          </a>
                          <p className="text-white text-left car-p">
                          {slug}
                          </p>
                  </Carousel.Caption>
          </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
        <div className="col-sm-4 py-4 mt-3">
          {
            <div className="cnt-1">
            <div className="cnt-txt-wrap">
              <a
                href={`/post/${firstFeed.slug}`}
                className="text-decoration-none inline-block p-2  cap-anco text-left mt-5"
              >
                {firstFeed.category_id}
              </a>
              <p>{firstFeed.slug}</p>
            </div>
          </div>
          }
          <div className="cnt-2">
            <div className="cnt-txt-wrap">
              <a
                href={`/post/${secondFeed.slug}`}
                className="text-decoration-none inline-block p-1 text-left cap-anco mt-5"
              >
                { secondFeed.category_id}
              </a>
              <p>
                { secondFeed.post_title}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
