import React, { useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavbarBrand,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModalComponent } from "../ModalComponent/modalcomponent";
export const NavbarComponent = () => {
  const scrollTop = () => {
    return window.scrollTo(0, 0);
  };
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        fixed="top"
        className="navbar-component"
      >
        <NavbarBrand className="navbar-brand" onClick={scrollTop()}>
          NewsApp
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/archived" className="nav-link">
              Archive
            </Link>
            <ModalComponent />
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="primary" bg="primary">
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
};
