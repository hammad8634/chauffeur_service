import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/main-logo-no-bg.png";
import BookingForm from "../booking/bookingForm";

const LuxuryNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const location = useLocation();

  // Auto-collapse when the route changes
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const closeMenu = () => setExpanded(false);

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        className="luxury-navbar fixed-top"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="luxury-logo"
            onClick={closeMenu}
          >
            <img src={logo} alt="Chauffeur Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto luxury-nav-links">
              <Nav.Link as={Link} to="/" onClick={closeMenu}>Home</Nav.Link>
              <Nav.Link as={Link} to="/fleet" onClick={closeMenu}>Fleet</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={closeMenu}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/faq" onClick={closeMenu}>FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={closeMenu}>Contact Us</Nav.Link>
            </Nav>

            <div className="auth-buttons">
              <Button
                variant="warning"
                className="auth-btn ms-2"
                onClick={() => {
                  setShowBooking(true);
                  closeMenu();
                }}
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
