import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./homepage.css";

class Banner extends Component {
  render() {
    const feeds = this.props.data;
    const firstFeed = Array.isArray(feeds) && feeds.length ? feeds[0] : {};
    const secondFeed = Array.isArray(feeds) && feeds.length ? feeds[1] : {};
    return (
      <div className="container-fluid flex-container banner">
        <div className="col-sm-8 py-4 carousel-ct">
          <Carousel className="mt-3 carosel">
            {feeds &&
              feeds.slice(0, 3).map((categ) => {
                const { featured_image, id, slug, category_id } = categ;
                return (
                  <Carousel.Item className="caro-item" key={id}>
                    <img
                      className="d-block w-100"
                      src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
                      alt="First slide"
                    />
                    <Carousel.Caption className="caro-capxn">
                      <a
                        href="#"
                        className="text-decoration-none p-2 text-left cap-ancor"
                      >
                        {category_id}
                      </a>
                      <a href={`/post/${slug}`}>
                        <p className="text-white text-left car-p text-capitalize">
                          {slug.toLowerCase()}
                        </p>
                      </a>
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
                  href="#!"
                  className="text-decoration-none inline-block p-2  cap-anco text-left mt-5"
                >
                  {firstFeed.category_id}
                </a>
                <a href={`/post/${firstFeed.slug}`}>
                  <p className="text-capitalize pb-4">{firstFeed.slug}</p>
                </a>
              </div>
            </div>
          }
          <div className="cnt-2">
            <div className="cnt-txt-wrap">
              <a
                href="/#"
                className="text-decoration-none inline-block p-2 text-left cap-anco mt-5"
              >
                {secondFeed.category_id}
              </a>
              <a href={`/post/${secondFeed.slug}`} className="slug">
                <p className="text-capitalize pb-3">{secondFeed.post_title}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
