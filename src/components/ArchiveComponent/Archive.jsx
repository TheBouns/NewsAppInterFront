import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteArticle,
  getAllArchived,
  reset,
} from "../../features/news/newsSlice";
import { Card, Button } from "react-bootstrap";
import { SpinnerComponent } from "../SpinnerComponent/spinner";

export const ArchiveComponent = () => {
  const { news, isLoading } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllArchived());
      await dispatch(reset());
    };
    fetchData();
  }, []);
  const deleteNew = (id) => {
    dispatch(deleteArticle(id));
  };
  if (isLoading) {
    return <SpinnerComponent />;
  }
  const article = news.map((item) => {
    return item.archive ? (
      <Card border="secondary" style={{ width: "60%" }} key={item._id}>
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
          <Card.Text>Source: {item.source}</Card.Text>
          <Card.Text>Author: {item.author}</Card.Text>
          <Button
            variant="danger"
            onClick={() => {
              deleteNew(item._id);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    ) : null;
  });

  return <div id="news-container">{article}</div>;
};
