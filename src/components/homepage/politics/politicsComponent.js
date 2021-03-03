import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Obaseki from "../../../assets/images/Godwin-Obaseki.jpg";
import Bagudu from "../../../assets/images/Bagudu.jpg";
import Dogara from "../../../assets/images/dogara.jpg";
import Hope from "../../../assets/images/Hope-Uzodinma.jpg";
import Kola from "../../../assets/images/kola.jpg";
import IVP from "../../../assets/images/IV-opposition.jpg";
import { getNewsFeed } from "../../../context/news/NewsApi";
import PoliticsCard from "./PlotiticsCard"
import "./politicsComponent.css";

class politicsComponent extends Component {
  static propTypes = {};
  state = {
    feeds: [],
  };
  async componentDidMount() {
    const newsFeeds = await getNewsFeed();
    this.setState(() => ({
      feeds: newsFeeds,
    }));
  }

  render() {
    const {feeds} = this.state
    return (
      <div className="politics-wrap container-fluid my-4">
        <h3>NEWS\TRENDING</h3>
        <div className="container-fluid my-3 p-2 row  pol-news-card-wrap">
        {
          feeds.length > 0 &&
          feeds.map((categ) => {
            const {  post_type, post_title, featured_image, id, slug } = categ;
            return (
              <PoliticsCard
                key={id}
                post_title={post_title}
                post_type={post_type}
                featured_image={featured_image}
                id={id}
                slug={slug}
              />
            );
          })
        }

         
        </div> 
      </div>
    );
  }
}

export default politicsComponent;
