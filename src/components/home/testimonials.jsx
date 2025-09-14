import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { Container, Card } from "react-bootstrap";
import "./testimonials.css";

const testimonials = [
    {
        name: "Liam Vensora",
        role: "Freelance Photographer",
        text: "Volutpat ac vitae lectus eget sollicitudin massa. Habitant sagittis orci eu maecenas sit at at tempor sed.",
        rating: 4.9,
        location: "Sydney",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Aria Mendez",
        role: "Marketing Lead",
        text: "Volutpat ac vitae lectus eget sollicitudin massa. Habitant sagittis orci eu maecenas sit at at tempor sed.",
        rating: 4.9,
        location: "Singapore",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        name: "Devon Rikali",
        role: "Event Coordinator",
        text: "Volutpat ac vitae lectus eget sollicitudin massa. Habitant sagittis orci eu maecenas sit at at tempor sed.",
        rating: 4.9,
        location: "Jakarta",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
        name: "Sophia Carter",
        role: "Business Executive",
        text: "The chauffeur service was flawless. Professional, on time, and the Rolls Royce was simply breathtaking.",
        rating: 5,
        location: "Dubai",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992, // tablets
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 576, // mobile
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="testimonials-section">
            <Container>
                {/* Heading */}
                <div className="section-header">
                    <p className="sub-heading">
                        {/* WHAT THEY SAY */}
                    </p>
                    <h2 className="main-heading">
                        REAL STORIES, <br /> REAL EXPERIENCES
                    </h2>
                    <p className="description">
                        Experience what our Dubai clients say about our Rolls Royce chauffeur service.
                    </p>
                </div>

                {/* Slider */}
                <Slider {...settings} className="mt-5">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="p-3">
                            <Card className="testimonial-card">
                                <Card.Body>
                                    <div className="user-info">
                                        <img src={item.image} alt={item.name} className="user-img" />
                                        <div>
                                            <h5 className="user-name">{item.name}</h5>
                                            <p className="user-role">{item.role}</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-text">{item.text}</p>
                                    <div className="testimonial-footer">
                                        <span className="rating">
                                            {item.rating}/5{" "}
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    color={i < Math.round(item.rating) ? "#FFD700" : "#555"}
                                                />
                                            ))}
                                        </span>
                                        <span className="location">{item.location}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default Testimonials;
