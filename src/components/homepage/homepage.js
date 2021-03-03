import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../reusables/navigation/Nav/Nav";
import Banner from "./banner";
import TeaserSection from "./homepageTeaser/teaserSection";
import SubscribeForm from "./homepageSubscribeSection/subscribe";
import Politics from "./politics/politicsComponent";
import Headlines from "./headlines/headlineComponent";
import Lifestyles from "./lifestyle/lifestyleComponent";
import Entertainment from "./entertainment/entertainmentComponent";
import Business from "./businessFinance/Business";
import Tech from "./techafrica/TechAfrica";
import Sports from "./sports/sportComponent";
import InsideAfrica from "./dicoverafrica/discoverAfrica";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../reusables/navigation/Footer/Footer";
import "./homepage.css";

function Homepage() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Fragment className="aos-init aos-animate home-wrap">
      <Router>
        <Nav />
        <Banner />
        <TeaserSection />
        <Politics />
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
