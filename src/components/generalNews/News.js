import React, { useEffect, useState, Fragment } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Nav from "../reusables/navigation/Nav/Nav";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getSingleNews } from "../../context/news/NewsApi";
import "./allNews.css";

function transform(node, index) {
  if (node.type === "tag" && node.name === "span") {
    return null;
  }
  if (node.type === "tag" && node.name === "ul") {
    node.name = "ol";
    return convertNodeToElement(node, index, transform);
  }

  if (node.type === "tag" && node.name === "b") {
    return <i key={index}>{processNodes(node.children, transform)}</i>;
  }
  if (node.type === "tag" && node.name === "a") {
    node.attribs.target = "_blank";

    return convertNodeToElement(node, index, transform);
  }

  if (node.type === "tag" && node.name === "button") {
    return (
      <Button variant="contained" color="primary" key={index}>
        {processNodes(node.children, transform)}
      </Button>
    );
  }
}

const options = {
  decodeEntities: true,
  transform,
};
const GetNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    getSingleNews(slug)
      .then((data) => {
        const [newsData] = data;
        setNews(newsData);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });

    //eslint-disable-next-line
  }, [slug, setNews]);
  const html = `<div>${news.post_description}</div>`;

  return (
    <Fragment className="news-endpnt-wrap">
      <Nav />
      <div className="container news">
        {error ? (
          <Link href="/">go Home</Link>
        ) : (
          <div>
            <h2 className="post_title">{news.post_title}</h2>
            <div>{ReactHtmlParser(html, options)}</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default GetNews;
