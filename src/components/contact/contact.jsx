import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // TODO: integrate with backend / email API
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
                        Reach out to Dubai’s trusted chauffeur service for bookings, support,
                        or custom luxury experiences.
                    </p>
                </Container>
            </section>

            <section className="contact-section py-5">
                <Container>
                    <Row>
                        {/* Contact Form */}
                        <Col md={7} className="mb-4">
                            <h2 className="section-heading">Send Us a Message</h2>
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
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
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

                                <Button type="submit" className="global-submit-btn" variant="none">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>

                        {/* Top 3 Contact Info (Right Side) */}
                        <Col md={5} className="d-flex flex-column justify-content-center mb-4">
                            <div className="contact-main-info">
                                <div className="info-box">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <h5>Our Location</h5>
                                        <p>Dubai, United Arab Emirates</p>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <i className="bi bi-telephone-fill"></i>
                                    <div>
                                        <h5>Phone</h5>
                                        <p>+971 50 701 2953</p>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <i className="bi bi-envelope-fill"></i>
                                    <div>
                                        <h5>Email</h5>
                                        <p>info@rollsroycetransfers.com</p>
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
                            <p>Mon - Fri: 9:00 AM – 8:00 PM</p>
                            <p>Sat - Sun: 10:00 AM – 6:00 PM</p>
                        </Col>
                        <Col md={4}>
                            <i className="bi bi-headset"></i>
                            <h5>Emergency Chauffeur Support</h5>
                            <p>24/7 Hotline: +971 50 701 2953</p>
                        </Col>
                        <Col md={4}>
                            <i className="bi bi-share-fill"></i>
                            <h5>Follow Us</h5>
                            <div className="social-icons">
                                <a href="#1"><i className="bi bi-facebook"></i></a>
                                <a href="#2"><i className="bi bi-instagram"></i></a>
                                <a href="#3"><i className="bi bi-twitter"></i></a>
                                <a href="#4"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};

export default Contact;
