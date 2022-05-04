import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

export const RegisterComponent = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;
  const onChange = (change) => {
    setData((prevState) => ({
      ...prevState,
      [change.target.name]: change.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(register(data));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="name"
            value={name}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
