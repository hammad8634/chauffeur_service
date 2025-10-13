import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <Container>
        <Row>
          {/* Brand Info */}
          <Col md={6}>
            <h4 className="footer-brand">Rolls Royce Transfers</h4>
            <p className="pb-3">
              Premium Rolls Royce chauffeur service in UAE. Experience unmatched
              elegance, comfort, and professionalism on every journey.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="footer-brand">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/faq">
                  FAQ
                </Nav.Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5 className="footer-brand">Contact</h5>
            <p>
              Email:{" "}
              <a className="email-link" href="mailto:info@rollsroycetransfers.com">
                info@rollsroycetransfers.com
              </a>
            </p>{" "}
            <p>Phone: +971 56 776 6002</p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/rollsroycetransfers?igsh=Zmdxc3RmMDFhNGJ2m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@rollsroycetransfers?_t=ZS-90PGFy5sfy6&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Row */}
        <Row className="mt-4 text-center">
          <Col>
            <p>
              © {new Date().getFullYear()} Rolls Royce Transfers. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
