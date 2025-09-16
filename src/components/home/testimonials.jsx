import React from "react";
import { FaStar } from "react-icons/fa";
import { Container, Card } from "react-bootstrap";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./testimonials.css";

const testimonials = [
    {
        name: "Ahmed Al Mansoori",
        role: "Entrepreneur",
        text: "From airport pickup to my hotel in Downtown Dubai, the service was seamless. The Ghost was immaculate and the chauffeur was highly professional.",
        rating: 5,
        location: "Dubai, UAE",
        image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
        name: "Emily Thompson",
        role: "Destination Bride",
        text: "We booked the Phantom for our wedding day and it was the highlight of the event. Elegant arrival, smooth ride, and an unforgettable experience.",
        rating: 5,
        location: "Palm Jumeirah, Dubai",
        image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
        name: "Ravi Kapoor",
        role: "Regional Manager",
        text: "Booked the Cullinan for an Abu Dhabi day trip with clients. Spacious, luxurious, and on-time service made the entire journey stress-free.",
        rating: 5,
        location: "Abu Dhabi, UAE",
        image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
        name: "Sarah Williams",
        role: "Event Planner",
        text: "The team handled VIP guest transfers for a corporate gala flawlessly. Every detail was taken care of — punctuality, luxury, and discretion.",
        rating: 5,
        location: "Business Bay, Dubai",
        image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
        name: "Mohammed Al Farsi",
        role: "Tourist",
        text: "We booked the Ghost for a Dubai city tour. Burj Khalifa, Marina, and Desert Safari — everything was covered in style. Truly worth it!",
        rating: 4.9,
        location: "Muscat, Oman",
        image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <Container>
                <div className="section-header">
                    <p className="sub-heading"></p>
                    <h2 className="main-heading">
                        REAL STORIES, <br /> REAL EXPERIENCES
                    </h2>
                    <p className="description">
                        Experience what our Dubai clients say about our Rolls Royce chauffeur service.
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    loop
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={600}
                    spaceBetween={24}
                    slidesPerView={1}                // mobile first
                    breakpoints={{
                        768: { slidesPerView: 2 },     // ≥768px (tablet)
                        992: { slidesPerView: 3 },     // ≥992px (desktop)
                    }}
                    className="global-swiper mt-5"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="p-3">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Testimonials;
