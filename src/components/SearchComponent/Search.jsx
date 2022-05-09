import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticleByTitle } from "../../features/news/newsSlice";
import { NoNewsFoundComponent } from "../NoNewsComponent/noNews";
import { Card, Button } from "react-bootstrap";
import { archiveArticle } from "../../features/news/newsSlice";

export const SearchComponent = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getArticleByTitle(title));
  }, [title]);
  const archive = (id) => {
    dispatch(archiveArticle(id));
  };

  const finded = news.map((item) => {
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
    ) : (
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
          <Card.Text>Archived</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return news.length == 0 ? (
    <div>
      <NoNewsFoundComponent />
    </div>
  ) : (
    <div id="news-container">{finded}</div>
  );
};
