import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../reusables/navigation/Nav/Nav";
import Banner from "./Banner";
import TeaserSection from "./homepageTeaser/teaserSection";
import SubscribeForm from "./homepageSubscribeSection/subscribe";
import Politics from "./politics/politicsComponent";
import Headlines from "./headlines/HeadlineComponent";
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
    <Fragment>
      <Nav />
      <Banner data={news} />
      <Politics data={news} />
      <TeaserSection data={news} />
      <Headlines data={news}/>
      <Business data={news} />
      <InsideAfrica />
      {/* <Tech /> */}
      <Sports data={news}/>
      <Lifestyles data={news}/>
      <Entertainment data={news}/>
      <SubscribeForm />
      <Footer />
    </Fragment>
  );
}

export default Homepage;
