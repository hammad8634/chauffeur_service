/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import Testimonials from "./testimonials";
import Stats from "./stats";
import LuxuryServices from "./luxuryServices";
import BookingForm from "../booking/bookingForm";
import VehiclesCarousel from "../vehicles/vehicle";
import RideWithUsImg from "../../images/cullinan.jpg";
// import HDBgVideo1 from "../../images/hd-bg-main-video.mp4";
// import BGVideo1 from "../../images/bg-main-video.mp4";
// import BGVideo2 from "../../images/bg-video.mp4";
import InstagramReels from "../instagram/instagramReels";
import ReelsGrid from "../instagram/instagramReels";
import HeroVideo from "../media/HeroVideo";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="hero-bg" aria-hidden="true">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            aria-hidden="true"
          >
            {/* Mobile first */}
            <source
              src="/videos/hero-480p.webm"
              type="video/webm"
              media="(max-width: 600px)"
            />
            <source
              src="/videos/hero-480p.mp4"
              type="video/mp4"
              media="(max-width: 600px)"
            />

            {/* Default / larger */}
            <source src="/videos/hero-720p.webm" type="video/webm" />
            <source src="/videos/hero-720p.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay" />
        </div>

        <Container className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Rolls Royce </span> Transfers
          </h1>
          <p className="hero-subtitle">
            Rent the world's finest cars and redefine luxury travel.
          </p>
          <div className="booking-wrap">
            <BookingForm />
          </div>
        </Container>
      </section>

      <VehiclesCarousel />
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
        <Container>
          <div className="text-center mb-5">
            <h2 className="benefits-title mb-3">Why Ride With Us?</h2>
            <p className="benefits-subtitle mb-4">
              Our Rolls Royce chauffeur service redefines elegance and
              reliability in Dubai. Here's why clients trust us:
            </p>
          </div>

          <Row className="align-items-center g-4">
            {/* Left Image */}
            <Col md={5}>
              <div className="benefits-image">
                <img
                  src={RideWithUsImg}
                  alt="Luxury Chauffeur"
                  className="img-fluid"
                />
              </div>
            </Col>

            {/* Right Content */}
            <Col md={7}>
              <div className="benefits-grid">
                {[
                  {
                    icon: "bi-shield-lock",
                    title: "Discreet & Reliable",
                    desc: "Privacy-focused chauffeurs for your peace of mind.",
                  },
                  {
                    icon: "bi-clock-history",
                    title: "24/7 Availability",
                    desc: "Always ready, day or night, for any occasion.",
                  },
                  {
                    icon: "bi-gem",
                    title: "Luxury Experience",
                    desc: "Arrive in timeless style with our Rolls Royce fleet.",
                  },
                  {
                    icon: "bi-cash-coin",
                    title: "Transparent Pricing",
                    desc: "No hidden fees – clear, upfront rates only.",
                  },
                  {
                    icon: "bi-calendar-check",
                    title: "Flexible Booking",
                    desc: "Book by the hour, day, or for exclusive events.",
                  },
                  {
                    icon: "bi-person-lines-fill",
                    title: "Personal Concierge",
                    desc: "Dedicated support to tailor your journey.",
                  },
                ].map((item, idx) => (
                  <div className="benefit-box" key={idx}>
                    <div className="benefit-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div className="benefit-copy">
                      <h6 className="benefit-title">{item.title}</h6>
                      <p className="benefit-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-card text-center">
            <h2 className="cta-title">
              Take Comfort on the Road, Book Your Chauffeur Today!
            </h2>
            <p className="cta-subtitle">
              Experience the Rolls Royce luxury in Dubai — tailored rides with
              professional chauffeurs, anytime you need.
            </p>
            <button className="btn cta-btn">Book Now</button>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* <InstagramReels
        title="Follow Us on Instagram"
        limit={6}
        reelUrls={[
          "https://www.instagram.com/reel/DNqRX10v0_W/?hl=en",
          "https://www.instagram.com/reel/DLLRYmjTaYu/?hl=en",
          "https://www.instagram.com/reel/DIhJjEQSfGZ/?hl=en",
          "https://www.instagram.com/reel/C_Vnd4XIk70/?hl=en",
        ]}
      /> */}

      {/* <ReelsGrid
        pageName="roadrunnerdxb"
        columns={3}
        items={[
          {
            id: "REEL_ID_1",
            url: "https://www.instagram.com/reel/DNqRX10v0_W/?hl=en",
            thumb:
              "https://img.autocarindia.com/ExtraImages/20220112014450_RR_Ghost_black_badge.jpg",
          },
          {
            id: "REEL_ID_2",
            url: "https://www.instagram.com/reel/DLLRYmjTaYu/?hl=en",
            thumb:
              "https://img.autocarindia.com/ExtraImages/20220112014450_RR_Ghost_black_badge.jpg",
          },
          {
            id: "REEL_ID_3",
            url: "https://www.instagram.com/reel/C_Vnd4XIk70/?hl=en",
            thumb:
              "https://img.autocarindia.com/ExtraImages/20220112014450_RR_Ghost_black_badge.jpg",
          },
        ]}
      /> */}
    </div>
  );
};

export default Home;
