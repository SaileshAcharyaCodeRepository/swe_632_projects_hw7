// Gemini AI assisted code

import React from "react";
import { Nav, Navbar, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTheme } from "../contexts/ThemeProvider";

import logo from "../assets/logo.png";

import "../styles/PriceTrackerNavBar.css";

const PriceTrackerNavBar = React.memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {" "}
      {/** Nav Bar */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="60" height="60" alt="PT" />
          </Navbar.Brand>
          <Nav variant="tabs" className="me-auto">
            <Nav.Link as={Link} to="/">
              Price Tracker
            </Nav.Link>
            <Nav.Link as={Link} to="/community">
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
              Help
            </Nav.Link>
          </Nav>
          {/**
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
          */}
        </Container>
      </Navbar>
      {/** Nav Bar */}
    </div>
  );
});

export default PriceTrackerNavBar;
