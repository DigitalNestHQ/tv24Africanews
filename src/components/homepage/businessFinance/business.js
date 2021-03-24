import React, { Component, Fragment } from "react";
import BusinessCard from "./BusinessCard";
import "./business.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Business extends Component {
  render() {
    AOS.init();
    const businessNews = this.props.data.filter(
      (bn) => bn.category_id === "Business News"
    );
    // console.log(businessNews);
    return (
      <Fragment>
        <div className="business my-4 container-fluid">
          <h3>BUSINESS AND FINANCE</h3>
          <div className=" shadow-sm row bs-col-wrap">
            <div className="col-sm-6 sme_bg"></div>
            <div className="col-sm-6 sme_rght">
              <h5>Bank highlights business support solutions</h5>
              <p>
                Modified date: November 27, 20200 The United Kingdom Trade Envoy
                to Nigeria, Hon. Helen Grant, has said that Nigeria was the
                fastest growing economy in Africa. Grant said this at...
              </p>
            </div>
          </div>
          <div
            className="row bus-article-wrap my-4 pl-0"
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            {businessNews.length &&
              businessNews.slice(0, 3).map((news) => {
                const {
                  post_title,
                  featured_image,
                  id,
                  slug,
                  category_id,
                } = news;
                return (
                  <BusinessCard
                    key={id}
                    post_title={post_title}
                    featured_image={featured_image}
                    category_id={category_id}
                    slug={slug}
                  />
                );
              })}
          </div>
          <div className="bus-ad"></div>
        </div>
      </Fragment>
    );
  }
}

export default Business;
