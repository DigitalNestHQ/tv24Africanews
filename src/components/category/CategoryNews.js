import React, { useState, useEffect, Fragment } from "react";
import Nav from "../reusables/navigation/Nav/Nav";
import Footer from "../reusables/navigation/Footer/Footer";
import queryString from "query-string";

import CategoryCard from "./CategoryCard";
import { getCategories } from "../../context/news/NewsApi";
import { Link, useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
import "./newscategory.css";

const CategoryNews = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [newsCateg, setNewsCateg] = useState(null);
  const [error, setError] = useState(null);

  // method1
  // const { search } = useLocation();
  // const x = new URLSearchParams(search);
  // const category = x.get("category");
  // console.log(search);

  // method2
  // const x = new URLSearchParams(search);
  // const category = x.get('category')
  const { search } = useLocation();
  const { category } = queryString.parse(search);

  console.log(category);
  useEffect(() => {
    let sub = true;
    if (sub) {
      try {
        getCategories(`${category}`)
          .then((res) => {
            setNewsCateg(res);
            console.log(res);
          })
          .then(() => {
            setLoading(false);
          });
      } catch (error) {
        if (error) {
          setError(error.message);
          console.log(error);
        }
      }
    }
    return () => (sub = null);
    //eslint-disable-next-line
  }, []);

  if (error) {
    return <Link to="/error404" />;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <Fragment>
      <Nav />
      {<h1 className="text-center text-title">{newsCateg[0].category_id}</h1>}
      <div className="q-categ">
        {newsCateg.length > 0 &&
          newsCateg.map((aNews) => {
            const {
              post_title,
              featured_image,
              id,
              post_type,
              slug,
              category_id,
            } = aNews;
            return (
              <CategoryCard
                key={id}
                post_title={post_title}
                featured_image={featured_image}
                slug={slug}
                category_id={category_id}
                post_type={post_type}
              />
            );
          })}
      </div>
      <Footer />
    </Fragment>
  );
};

export default CategoryNews;
