import { useState } from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ModalComponent } from "../ModalComponent/modalcomponent";
import "./navbar.css";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
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
        <Link to="/">
          <NavbarBrand className="navbar-brand">NewsApp</NavbarBrand>
        </Link>
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
        <input
          type="search"
          placeholder="Search article,title,source...."
          className="me-2"
          aria-label="Search"
          onKeyUp={handleChange}
        />
      </Navbar>
    </>
  );
};
