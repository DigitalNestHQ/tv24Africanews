import React from "react";
import EntertainmentCard from "./EntertainmentCard";
import "./entertainment.css";

class Entertainment extends React.Component {
  render() {
    const entertainment = this.props.data && this.props.data.filter(
      (news) => news.category_id === "Entertainment"
    );
    return (
      <div className="entertainment">
        <h3 className="text-center py-2">ENTERTAINMENT</h3>
        <div className="container-fluid ent-chng-pos">
          <div className="container-fluid row w-100 bg-white mx-auto ent-pos-tp">
            {entertainment && entertainment.length &&
              entertainment.slice(0, 4).map((life) => {
                const {
                  featured_image,
                  category_id,
                  slug,
                  post_title,
                  id,
                } = life;
                return (
                  <EntertainmentCard
                    key={id}
                    featured_image={featured_image}
                    category_id={category_id}
                    slug={slug}
                    post_title={post_title}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Entertainment;
