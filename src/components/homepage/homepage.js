import React from "react";
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
function homepage() {
  return (
    <div>
      <Banner />
      <TeaserSection />
      <Politics />
      <Headlines />
      <Business />
      <InsideAfrica />
      {/* <Tech /> */}
      <Sports />
      {/* <Lifestyles /> */}
      <Entertainment />
      <SubscribeForm />
      <Footer />
    </div>
  );
}

export default homepage;
