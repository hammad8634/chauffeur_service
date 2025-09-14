import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <Container>
        <Row>
          <Col md={6}>
            <h4 className="footer-brand">Opremum Lixyry</h4>
            <p>Luxury Rolls Royce Chauffeur Service, redefining elegance and comfort in every journey.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <p>Email: info@opremumlixyry.com</p>
            <p>Phone: +971 55 123 4567</p>
            <div className="footer-socials">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <p>© 2025 Opremum Lixyry. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
