import { Form, Button } from "react-bootstrap";
import { useState } from "react";
export const LoginComponent = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const onChange = (change) => {
    setData((prevState) => ({
      ...prevState,
      [change.target.name]: change.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("data", data);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
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
