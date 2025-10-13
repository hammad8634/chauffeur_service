import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Dropdown,
  Alert,
} from "react-bootstrap";
import "./contact.css";
import emailjs from "@emailjs/browser";
import countries from "../../data/countries.json";

// === Reuseable country + phone input (same pattern as Booking) ===
const CountryPhoneInput = ({
  countryCode,
  phone,
  onCodeChange,
  onPhoneChange,
}) => {
  return (
    <div className="luxury-input">
      <InputGroup>
        <Dropdown onSelect={(code) => onCodeChange(code)}>
          <Dropdown.Toggle as={InputGroup.Text} className="code-toggle">
            {countryCode || "+___"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="code-menu">
            {countries.map((c) => (
              <Dropdown.Item eventKey={c.dial_code} key={c.code}>
                {c.name} ({c.dial_code})
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => {
            const v = e.target.value
              .replace(/[^\d+]/g, "")
              .replace(/(?!^)\+/g, "");
            onPhoneChange(v);
          }}
        />
      </InputGroup>
    </div>
  );
};

// === ENV (same as booking) ===
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ADMIN = process.env.REACT_APP_TEMPLATE_ADMIN;
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    countryCode: "+971",
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  // Same normalize logic you used in Booking
  const normalizePhone = (cc, phone) => {
    if (!phone) return "";
    const ccNorm = (cc || "").trim(); // e.g. "+971"
    const ccDigits = ccNorm.replace(/\D/g, ""); // "971"

    const cleaned = phone
      .trim()
      .replace(/[^\d+]/g, "")
      .replace(/(?!^)\+/g, "");
    if (cleaned.startsWith("+")) return cleaned;

    const local = cleaned.replace(/^0+/, "");
    if (local.startsWith(ccDigits)) return `+${local}`;

    return `${ccNorm} ${local}`.trim();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
      countryCode: "+971",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic validations
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please complete Name, Email, and Message.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // Map Contact -> Booking Admin template params
    const params = {
      full_name: formData.name,
      user_email: formData.email,
      phone: normalizePhone(formData.countryCode, formData.phone) || "—",
      emirate: "Contact Inquiry", // repurpose field
      pickup_time: new Date().toISOString(), // or "—" if you prefer
      location_details: "—", // not applicable
      comments: (formData.message || "").trim() || "—",
      to_email: ADMIN_EMAIL,
    };

    try {
      setSending(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN, params); // ONLY send to admin
      setSubmitted(true); // show thank you to user
      resetForm();
    } catch (err) {
      console.error(err);
      setErrorMsg(
        "Could not send your message at the moment. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero text-center">
        <Container>
          <h1 className="contact-title">
            Get In <span className="highlight">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Reach out to UAE’s trusted chauffeur service for bookings, support,
            or custom luxury experiences.
          </p>
        </Container>
      </section>

      <section className="contact-section py-5">
        <Container>
          <Row>
            {/* Contact Form */}
            <h2 className="section-heading text-center">Send Us a Message</h2>
            <Col md={7} className="mb-4">
              {submitted && (
                <Alert variant="success" className="mb-3">
                  Thank you! Your message has been received. Our team will get
                  back to you shortly.
                </Alert>
              )}
              {errorMsg && (
                <Alert variant="danger" className="mb-3">
                  {errorMsg}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    isInvalid={
                      formData.email !== "" && !isValidEmail(formData.email)
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <CountryPhoneInput
                    countryCode={formData.countryCode}
                    phone={formData.phone}
                    onCodeChange={(code) =>
                      setFormData((s) => ({ ...s, countryCode: code }))
                    }
                    onPhoneChange={(val) =>
                      setFormData((s) => ({ ...s, phone: val }))
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="global-submit-btn"
                  variant="none"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </Col>

            {/* Top 3 Contact Info (Right Side) */}
            <Col
              md={5}
              className="d-flex flex-column justify-content-center mb-4"
            >
              <div className="contact-main-info">
                <div className="info-box">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <h5>Our Location</h5>
                    <p>United Arab Emirates</p>
                  </div>
                </div>
                <div className="info-box">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <h5>Phone</h5>
                    <p>+971 56 776 6002</p>
                  </div>
                </div>
                <div className="info-box">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <h5>Email</h5>
                    <p>
                      <a
                        className="email-link"
                        href="mailto:info@rollsroycetransfers.com"
                      >
                        info@rollsroycetransfers.com
                      </a>
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Remaining Info Below */}
          <Row className="contact-extra mt-5 text-center">
            <Col md={4}>
              <i className="bi bi-clock-fill"></i>
              <h5>Business Hours</h5>
              <p>24/7</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-headset"></i>
              <h5>Emergency Chauffeur Support</h5>
              <p>24/7 Hotline: +971 56 776 6002</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-share-fill"></i>
              <h5>Follow Us</h5>
              <div className="social-icons">
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
        </Container>
      </section>
    </div>
  );
};

export default Contact;
