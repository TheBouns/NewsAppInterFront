import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, getAllArchived } from "../../features/news/newsSlice";
import { Card, Button } from "react-bootstrap";

export const ArchiveComponent = () => {
  const { news } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArchived());
  }, []);
  const deleteNew = (id) => {
    dispatch(deleteArticle(id));
  };

  const article = news.map((item) => {
    return item.archive ? (
      <Card border="secondary" style={{ width: "50%" }} key={item._id}>
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
