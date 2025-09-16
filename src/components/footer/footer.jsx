import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <Container>
        <Row>
          {/* Brand Info */}
          <Col md={6}>
            <h4 className="footer-brand">Rolls Royce Transfers</h4>
            <p>
              Premium Rolls Royce chauffeur service in Dubai. Experience unmatched elegance, comfort, and professionalism on every journey.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="footer-brand">Quick Links</h5>
            <ul className="footer-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5 className="footer-brand">Contact</h5>
            <p>Email: info@rollsroycetransfers.com</p>
            <p>Phone: +971 55 515 3069</p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Row */}
        <Row className="mt-4 text-center">
          <Col>
            <p>© {new Date().getFullYear()} Rolls Royce Transfers. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
