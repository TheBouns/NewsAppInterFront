import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { archiveArticle, getAll, reset } from "../../features/news/newsSlice";
import { Card, Button } from "react-bootstrap";
import { SpinnerComponent } from "../SpinnerComponent/spinner";
import "./news.css";

export const NewsComponent = () => {
  const { news, isLoading } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAll());
      await dispatch(reset());
    };
    fetchData();
  }, []);
  const archive = (id) => {
    dispatch(archiveArticle(id));
  };
  if (isLoading) {
    return <SpinnerComponent />;
  }
  const article = news.map((item) => {
    return item.archive === false ? (
      <Card border="secondary" style={{ width: "60%" }} key={item._id}>
        <Card.Img
          variant="top"
          src={item.image}
          style={{ width: "100%" }}
          className="card-height"
        />
        <Card.Body>
          <Card.Title>
            <h2>{item.title}</h2>
          </Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.content}</Card.Text>
          <Card.Text>Source: {item.source}</Card.Text>
          <Card.Text>Author: {item.author}</Card.Text>

          <Button variant="primary" onClick={() => archive(item._id)}>
            Archive
          </Button>
        </Card.Body>
      </Card>
    ) : null;
  });

  return (
    <div id="news-container">
      <span style={{ display: "inline-block" }}>
        <h1 className="news-container-title">Welcome To NewsAPP Website</h1>
      </span>
      {article}
    </div>
  );
};
