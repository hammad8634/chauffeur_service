import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero text-center">
        <Container>
          <h1 className="about-title">
            About <span className="highlight">Us</span>
          </h1>
          <p className="about-subtitle">
            Redefining luxury chauffeur experiences in UAE with elegance,
            exclusivity, and unmatched service.
          </p>
        </Container>
      </section>

      {/* Our Story */}
      <section className="about-story py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <img
                src="https://robbreport.com/wp-content/uploads/2025/09/P90549007_highRes_rolls-royce-cullinan-e1757453686113.jpg?w=1000"
                alt="Luxury Chauffeur"
                className="img-fluid rounded about-img"
              />
            </Col>
            <Col md={6}>
              <h2 className="section-heading">Our Story</h2>
              <p className="section-text">
                We were founded with a single vision - to deliver more than just
                transportation. Our Rolls Royce chauffeur service is about
                prestige, comfort, and trust. Over the years, we have become the
                go-to choice for business leaders, celebrities, and discerning
                clients in UAE who expect nothing but the best.
              </p>
              <p className="section-text">
                With every journey, we uphold the promise of discretion,
                punctuality, and luxury — ensuring every ride is memorable.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <div className="mission-box">
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-text">
                  To deliver unmatched chauffeur-driven luxury experiences that
                  combine elegance, safety, and personal attention, making every
                  journey extraordinary.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="vision-box">
                <h3 className="vision-title">Our Vision</h3>
                <p className="vision-text">
                  To be UAE’s most trusted name in luxury chauffeur services,
                  redefining how clients experience comfort and sophistication
                  on the road.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="about-why py-5">
        <Container>
          <h2 className="section-heading text-center mb-5">Why Choose Us?</h2>
          <Row>
            {[
              {
                icon: "bi-gem",
                title: "Exclusive Luxury",
                text: "Arrive in style with our Rolls Royce chauffeur experience.",
              },
              {
                icon: "bi-shield-lock",
                title: "Privacy & Trust",
                text: "We ensure complete discretion and security for every client.",
              },
              {
                icon: "bi-clock-history",
                title: "24/7 Availability",
                text: "Our service is available around the clock, whenever you need us.",
              },
              {
                icon: "bi-award",
                title: "Proven Excellence",
                text: "With years of service, we’ve built a reputation for reliability.",
              },
            ].map((item, idx) => (
              <Col md={3} sm={6} key={idx} className="mb-4">
                <div className="why-card text-center">
                  <i className={`bi ${item.icon} why-icon`}></i>
                  <h5 className="why-title">{item.title}</h5>
                  <p className="why-text">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about-cta text-center py-5">
        <Container>
          <h2 className="cta-title">
            Experience the <span className="highlight">Luxury Drive</span> You
            Deserve
          </h2>
          <p className="cta-subtitle">
            Book your chauffeur today and step into the elegance of Rolls Royce.
          </p>
          <Button className="global-submit-btn">Book Now</Button>
        </Container>
      </section>
    </div>
  );
};

export default About;
