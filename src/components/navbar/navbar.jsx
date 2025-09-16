import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/main-logo-no-bg.png";
import BookingForm from "../booking/bookingForm";

const LuxuryNavbar = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="luxury-navbar fixed-top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="luxury-logo">
            <img src={logo} alt="Chauffeur Logo" />
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
              <Button
                variant="warning"
                className="auth-btn ms-2"
                onClick={() => setShowBooking(true)}
              >
                Book Now
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Booking form in navbar mode */}
      <BookingForm mode="navbar" showExternal={showBooking} setShowExternal={setShowBooking} />
    </>
  );
};

export default LuxuryNavbar;
