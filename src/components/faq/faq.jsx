import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
    const faqs = [
        {
            question: "What cars are available for chauffeur service in Dubai?",
            answer:
                "We specialize in Rolls Royce chauffeur service for weddings, corporate events, airport transfers, and luxury experiences."
        },
        {
            question: "How do I book a chauffeur in Dubai?",
            answer:
                "You can book directly via our website, WhatsApp, or phone. Our team is available 24/7 for bookings."
        },
        {
            question: "Is the service available 24/7?",
            answer:
                "Yes, our Rolls Royce chauffeur service is available 24/7 across Dubai to meet your travel needs."
        },
        {
            question: "Are fuel, tolls, and parking included?",
            answer:
                "Yes, our chauffeur packages are all-inclusive: fuel, Salik (tolls), and standard parking fees are covered."
        },
        {
            question: "Can I book for multiple hours or full days?",
            answer:
                "Yes, we offer flexible hourly, daily, and even multi-day chauffeur hire options tailored to your requirements."
        }
    ];

    return (
        <div className="faq-page">
            <section className="faq-section py-5">
                <Container>
                    <h2 className="faq-title text-center">Frequently Asked Questions</h2>
                    <p className="faq-subtitle text-center mb-5">
                        Everything you need to know about our luxury chauffeur service
                    </p>

                    <Row>
                        {faqs.map((faq, index) => (
                            <Col md={6} sm={12} key={index} className="mb-4">
                                <Accordion className="luxury-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{faq.question}</Accordion.Header>
                                        <Accordion.Body>{faq.answer}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default FAQ;
