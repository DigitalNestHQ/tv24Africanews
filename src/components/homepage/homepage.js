import React from "react";
import Banner from "./banner";
import TeaserSection from "./homepageTeaser/teaserSection";
import Footer from "../reusables/navigation/Footer/footer";
import SubscribeForm from "./homepageSubscribeSection/subscribe";
function homepage() {
  return (
    <div>
      <Banner />
      <TeaserSection />
      <SubscribeForm />
      <Footer />
    </div>
  );
}

export default homepage;
