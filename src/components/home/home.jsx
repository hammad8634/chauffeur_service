import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./home.css";
import Testimonials from "./testimonials";
import Stats from "./stats";
import LuxuryServices from "./luxuryServices";

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section text-center">
                <Container>
                    <br />
                    <br /><br />
                    {/* Text on top */}
                    <h1 className="hero-title">
                        Your <span className="highlight">Ultimate</span> Luxury Drive Awaits
                    </h1>
                    <p className="hero-subtitle">
                        Rent the world's finest cars and redefine luxury travel.
                    </p>

                    {/* Booking form ABOVE the car */}
                    <div className="booking-form mx-auto mb-4">
                        <Row className="g-3 align-items-center">
                            {/* Location Dropdown */}
                            <Col md={3} xs={12}>
                                <div className="input-box">
                                    <span className="input-label">Pick Up Location</span>
                                    <Form.Select className="form-select-custom" defaultValue="">
                                        <option value="" disabled>
                                            Select Location
                                        </option>
                                        <option>Dubai Airport - Terminal 1</option>
                                        <option>Dubai Airport - Terminal 2</option>
                                        <option>Dubai Airport - Terminal 3</option>
                                        <option>Sharjah Airport</option>
                                    </Form.Select>
                                </div>
                            </Col>

                            {/* Pick Up Date & Time */}
                            <Col md={3} xs={12}>
                                <div className="input-box">
                                    <span className="input-label">Pick Up Date & Time</span>
                                    <Form.Control type="datetime-local" className="form-control-custom" />
                                </div>
                            </Col>

                            {/* Return Date & Time */}
                            <Col md={3} xs={12}>
                                <div className="input-box">
                                    <span className="input-label">Return Date & Time</span>
                                    <Form.Control type="datetime-local" className="form-control-custom" />
                                </div>
                            </Col>

                            {/* Search Button */}
                            <Col md={3} xs={12}>
                                <Button className="global-submit-btn w-100">Book Now</Button>
                            </Col>
                        </Row>
                    </div>



                    {/* Car Image */}
                    <div className="hero-car">
                        <img
                            src="https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG18.png"
                            alt="Luxury Car"
                            className="car-img"
                        />
                    </div>

                </Container>
            </section>

            {/* Services Section */}
            {/* <section className="services-section text-center py-5">
                <Container>
                    <h2 className="services-title">Our Services</h2>
                    <Row className="mt-4">
                        {[
                            {
                                img: "https://imageio.forbes.com/specials-images/imageserve/67e2d9cc7957da265342e809/Blacklane-luxury-chauffeur-service/0x0.jpg?format=jpg&width=960",
                                title: "City-to-city rides",
                                text: "Your stress-free solution for long-distance rides with professional chauffeurs across the globe."
                            },
                            {
                                img: "https://protocoltourism.com/wp-content/uploads/2022/05/VIP-Chauffeur.jpg",
                                title: "Chauffeur hailing",
                                text: "Your stress-free solution for luxury on-demand chauffeur rides, tailored to your schedule."
                            },
                            {
                                img: "https://www.shutterstock.com/image-photo/chauffeur-packs-suitcase-car-trunk-600nw-2406647113.jpg",
                                title: "Airport transfers",
                                text: "Seamless airport pickups and drop-offs with real-time flight tracking and world-class service."
                            },
                            {
                                img: "https://t3.ftcdn.net/jpg/07/00/33/14/360_F_700331471_sKUGLWgakIK6YSE6TEblh32SgoF8dag1.jpg",
                                title: "Hourly and full day hire",
                                text: "Flexible chauffeur services by the hour or day, ensuring comfort and reliability."
                            }
                        ].map((service, idx) => (
                            <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
                                <div className="service-card">
                                    <img src={service.img} alt={service.title} className="service-img" />
                                    <div className="service-content text-start p-3">
                                        <h5 className="service-title">{service.title}</h5>
                                        <p className="service-text">{service.text}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section> */}


            <LuxuryServices />

            {/* How It Works Section */}
            <section className="how-section text-center py-5">
                <Container>
                    <h2 className="how-title">How It Works</h2>
                    <p className="how-subtitle mb-5">
                        Just 3 simple steps to book your luxury chauffeur ride
                    </p>
                    <Row className="justify-content-center">
                        {[
                            {
                                icon: "bi-geo-alt-fill",
                                title: "Choose Location",
                                text: "Select your pick-up location, whether it’s an airport or city.",
                            },
                            {
                                icon: "bi-calendar-check-fill",
                                title: "Select Date & Time",
                                text: "Pick the exact date and time for your ride.",
                            },
                            {
                                icon: "bi-car-front-fill",
                                title: "Enjoy Your Chauffeur",
                                text: "Sit back, relax, and enjoy the Rolls Royce experience.",
                            },
                        ].map((step, idx) => (
                            <Col md={4} sm={12} key={idx} className="mb-4">
                                <div className={`how-card ${idx === 1 ? "active-step" : ""}`}>
                                    <div className="how-icon">
                                        <i className={`bi ${step.icon}`}></i>
                                    </div>
                                    <h5 className="how-step-title">{step.title}</h5>
                                    <p className="how-step-text">{step.text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Stats />

            {/* Chauffeur Benefits Section */}
            <section className="benefits-section py-5">
                <div className="text-center mb-5">
                    <h2 className="benefits-title mb-3">Why Ride With Us?</h2>
                    <p className="benefits-subtitle mb-4">
                        Our Rolls Royce chauffeur service redefines elegance and reliability in Dubai.
                        Here's why clients trust us:
                    </p>
                </div>
                <div className="container d-flex flex-column flex-md-row align-items-center">

                    {/* Left Image */}
                    <div className="benefits-image mb-4 mb-md-0 me-md-5">
                        <img
                            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
                            alt="Luxury Chauffeur"
                            className="img-fluid rounded"
                        />
                    </div>
                    {/* Right Content */}
                    <div className="benefits-content">

                        <div className="row align-items-center">
                            {[
                                { icon: "bi-shield-lock", title: "Discreet & Reliable", desc: "Privacy-focused chauffeurs for your peace of mind." },
                                { icon: "bi-clock-history", title: "24/7 Availability", desc: "Always ready, day or night, for any occasion." },
                                { icon: "bi-gem", title: "Luxury Experience", desc: "Arrive in timeless style with our Rolls Royce fleet." },
                                { icon: "bi-cash-coin", title: "Transparent Pricing", desc: "No hidden fees – clear, upfront rates only." },
                                { icon: "bi-calendar-check", title: "Flexible Booking", desc: "Book by the hour, day, or for exclusive events." },
                                { icon: "bi-person-lines-fill", title: "Personal Concierge", desc: "Dedicated support to tailor your journey." }
                            ].map((item, idx) => (
                                <div className="col-md-6 col-sm-12 mb-4" key={idx}>
                                    <div className="benefit-box d-flex">
                                        <div className="benefit-icon me-3">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <div>
                                            <h6 className="benefit-title">{item.title}</h6>
                                            <p className="benefit-desc">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section py-5">
                <div className="container">
                    <div className="cta-card text-center">
                        <h2 className="cta-title">Take Comfort on the Road, Book Your Chauffeur Today!</h2>
                        <p className="cta-subtitle">
                            Experience the Rolls Royce luxury in Dubai — tailored rides with professional chauffeurs, anytime you need.
                        </p>
                        <button className="btn cta-btn">Book Now</button>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Home;
