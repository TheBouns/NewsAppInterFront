import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createArticle } from "../../features/news/newsSlice";
import { useDispatch } from "react-redux";
export const CreateArticle = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    image: "",
    description: "",
    content: "",
    author: "",
    source: "",
  });
  const { title, image, description, content, author, source } = data;
  const onChange = (change) => {
    setData((prevState) => ({
      ...prevState,
      [change.target.name]: change.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createArticle(data));
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="title"
            value={title}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
