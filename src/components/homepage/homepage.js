import React, { Fragment, useEffect } from "react";
import Banner from "./banner";
import TeaserSection from "./homepageTeaser/teaserSection";
import Footer from "../reusables/navigation/Footer/footer";
import SubscribeForm from "./homepageSubscribeSection/subscribe";
import Politics from "./politics/politicsComponent";
import Headlines from "./headlines/headlineComponent";
import Lifestyles from "./lifestyle/lifestyleComponent";
import Entertainment from "./entertainment/entertainmentComponent";
import Business from "./businessFinance/business"
import Tech from "./techafrica/techAfrica";
import Sports from "./sports/sportComponent";
import InsideAfrica from "./dicoverafrica/discoverAfrica";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {
  useEffect(() => {
    AOS.init();
})
  return (
    <Fragment className="aos-init aos-animate">
      <Banner />
      <TeaserSection />
      <Politics />
      <Headlines />
      <Business />
      <InsideAfrica />
      <Tech />
      <Sports />
      <Lifestyles />
      <Entertainment />
      <SubscribeForm />
      <Footer />
    </Fragment>
  );
}

export default Homepage;
