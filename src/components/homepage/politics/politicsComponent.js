import React, { Component } from "react";
import PoliticsCard from "./PlotiticsCard";
import "./politicsComponent.css";

class politicsComponent extends Component {
  render() {
    const feeds = this.props.data;
    console.log(feeds)
    return (
      <div className="politics-wrap container-fluid my-4">
        <h3>TRENDING</h3>
        <div className="container-fluid my-3 p-2 row  pol-news-card-wrap">
          {feeds.length > 0 &&
            feeds.slice(0, 8).map((categ) => {
              const {
                post_type,
                post_title,
                featured_image,
                id,
                slug,
                category_id,
              } = categ;
              return (
                <PoliticsCard
                  key={id}
                  post_title={post_title}
                  post_type={post_type}
                  featured_image={featured_image}
                  id={id}
                  slug={slug}
                  category_id={category_id}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default politicsComponent;
