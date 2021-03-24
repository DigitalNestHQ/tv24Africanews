import React from "react";
import TeaserCard from "./TeaserCard";
import "../homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TeaserSection = (props) => {
  const teasers = props.data;
  AOS.init();
  return (
    <div
      className="teaser mt-3 mb-3 mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1500"
    >
      <div className="row container-fluid mx-auto teas-crd-wrap">
        {teasers && teasers.length > 0 &&
          teasers.slice(7,11).map((teaser) => {
            const { featured_image, id, slug, category_id } = teaser;
            return (
              <TeaserCard
                key={id}
                featured_image={featured_image}
                slug={slug}
                category_id={category_id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TeaserSection;
