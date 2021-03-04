import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import Nav from "../reusables/navigation/Nav/Nav";
import Banner from "./Banner";
import TeaserSection from "./homepageTeaser/teaserSection";
import SubscribeForm from "./homepageSubscribeSection/subscribe";
import Politics from "./politics/politicsComponent";
import Headlines from "./headlines/headlineComponent";
import Lifestyles from "./lifestyle/lifestyleComponent";
import Entertainment from "./entertainment/entertainmentComponent";
import { getNewsFeed } from "../../context/news/NewsApi";
import Business from "./businessFinance/Business";
import Tech from "./techafrica/TechAfrica";
import Sports from "./sports/sportComponent";
import InsideAfrica from "./dicoverafrica/discoverAfrica";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../reusables/navigation/Footer/Footer";
import "./homepage.css";

function Homepage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  // your useeffct function will cause memory  leaks
  useEffect(() => {
    AOS.init();
    let subscribe = true;
    if (subscribe) {
      getNewsFeed()
        .then((data) => {
          setNews(data);
          // console.log(data);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      return () => (subscribe = null);
    }

    //eslint-disable-next-line
  }, [slug, setNews]);
  
  return (
    <Fragment className="aos-init aos-animate home-wrap">
      <Router>
        <Nav />
        <Banner data={news}/>
        <Politics data={news} />
        <TeaserSection />
        <Headlines />
        <Business />
        <InsideAfrica />
        {/* <Tech /> */}
        <Sports />
        <Lifestyles />
        <Entertainment />
        <SubscribeForm />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default Homepage;
