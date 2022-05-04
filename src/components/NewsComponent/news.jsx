import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/news/newsSlice";
import { Card, Button } from "react-bootstrap";
import "./news.css";

export const NewsComponent = () => {
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  const article = news.map((item) => {
    return (
      <Card border="secondary" style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={item.image}
          style={{ width: "100%" }}
          className="card-height"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.content}</Card.Text>
          <div className="card-buttons">
            <Button variant="primary">Archive</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    );
  });

  return <div id="news-container">{article}</div>;
};
