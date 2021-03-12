import React, { Component } from "react";
import LifeStyleCard from "./LifeStyleCard";
import "./lifestyle.css";

class Lifestyle extends Component {
  render() {
    const lifeStyles = this.props.data.filter(
      (news) => news.category_id === "Lifestyle"
    );
    return (
      <div className="lifestyle mt-3 mb-3 pt-3 pb-3">
        <h3 className="text-center py-2 text-white">LIFESTYLES</h3>
        <div className="container-fluid">
          <div className="container-fluid row mx-auto lf-wrap bg-white">
            {lifeStyles.length &&
              lifeStyles.slice(0, 4).map((life) => {
                const { featured_image, category_id, id } = life;
                return (
                  <LifeStyleCard
                    key={id}
                    featured_image={featured_image}
                    category_id={category_id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Lifestyle;
