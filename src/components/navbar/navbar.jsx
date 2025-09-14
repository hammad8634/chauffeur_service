import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const LuxuryNavbar = () => {
  return (
    <Navbar expand="lg" className="luxury-navbar fixed-top" variant="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="luxury-logo">
          Limo <span className="brand-highlight">Rent</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto luxury-nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right side buttons */}
          <div className="auth-buttons">
            <Button variant="outline-light" className="auth-btn">Sign In</Button>
            <Button variant="warning" className="auth-btn ms-2">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LuxuryNavbar;
