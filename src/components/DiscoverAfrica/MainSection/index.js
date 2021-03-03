import React from "react";
import { mainData, sideData } from "./data";
import Card from "./Card";
import "./index.css";

const MainSection = () => {
  return (
    <section className="discover">
      <div className="left-pane">
        {mainData.map((value) => {
          return (
            <Card
              image={value.image}
              title={value.title}
              content={value.content}
              className="card-unit"
            />
          );
        })}
      </div>
      <div className="right-pane">
        <h4 className="trend">TRENDS</h4>
        <ul>
          {sideData.map((trend) => (
            <li className="trend_list">
              <a href="#">{trend}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainSection;
