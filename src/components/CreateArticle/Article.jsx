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
            placeholder="Title"
            name="title"
            value={title}
            onChange={onChange}
            required
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
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Content"
            name="content"
            value={content}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            name="author"
            value={author}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Source</Form.Label>
          <Form.Control
            type="text"
            placeholder="Source"
            name="source"
            value={source}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            single
            name="image"
            value={image}
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
