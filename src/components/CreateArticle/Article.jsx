import { Form, Button } from "react-bootstrap";
import { createArticle } from "../../features/news/newsSlice";
import { useDispatch } from "react-redux";
export const CreateArticle = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.image.files[0]) formData.set("image", e.target.image.files[0]);
    formData.set("title", e.target.title.value);
    formData.set("description", e.target.description.value);
    formData.set("content", e.target.content.value);
    formData.set("author", e.target.author.value);
    formData.set("source", e.target.source.value);
    dispatch(createArticle(formData));
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" name="title" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="createArticle">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Content"
            name="content"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="createArticle">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Author" name="author" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="createArticle">
          <Form.Label>Source</Form.Label>
          <Form.Control type="text" placeholder="Source" name="source" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="createArticle">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" single="true" name="image" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
