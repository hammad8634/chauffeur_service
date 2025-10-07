import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./vehicles.css";

import RRGhost1 from "../../images/rolls-royce-ghost/rolls-royce-ghost-1.jpg";
import RRGhost2 from "../../images/rolls-royce-ghost/rolls-royce-ghost-2.jpg";
import RRGhost3 from "../../images/rolls-royce-ghost/rolls-royce-ghost-3.jpg";
import RRGhost4 from "../../images/rolls-royce-ghost/rolls-royce-ghost-4.jpg";
import RRGhost5 from "../../images/rolls-royce-ghost/rolls-royce-ghost-5.jpg";
import RRGhost6 from "../../images/rolls-royce-ghost/rolls-royce-ghost-6.jpg";
import RRGhost7 from "../../images/rolls-royce-ghost/rolls-royce-ghost-7.jpg";

import RRPhantom1 from "../../images/rolls-royce-phantom/rolls-royce-phantom-1.jpg";
import RRPhantom2 from "../../images/rolls-royce-phantom/rolls-royce-phantom-2.jpg";

import RRCullinan1 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-1.jpg";
import RRCullinan2 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-2.jpg";
import RRCullinan3 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-3.jpg";
import RRCullinan4 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-4.jpg";
import RRCullinan5 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-5.jpg";
import RRCullinan6 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-6.jpg";
import RRCullinan7 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-7.jpg";
import RRCullinan8 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-8.jpg";
import RRCullinan9 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-9.jpg";
import RRCullinan10 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-10.jpg";
import RRCullinan11 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-11.jpg";
import RRCullinan12 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-12.jpg";
import RRCullinan13 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-13.jpg";
import RRCullinan14 from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-14.jpg";

const vehicles = [
  {
    id: "rolls-royce-ghost",
    name: "Rolls Royce Ghost",
    img: [RRGhost1, RRGhost2, RRGhost3, RRGhost4, RRGhost5, RRGhost6, RRGhost7],
    perks: [
      "24x7 Support",
      "Unlimited Mileage",
      "Chauffeur, Fuel, Toll, Parking",
      "Complimentary Water & Car Charger",
      "Free cancellation & Modification (Terms apply)",
    ],
    description:
      "The Rolls Royce Ghost embodies contemporary luxury with a minimalist yet powerful presence. Its two-tone white and gold roof styling exudes elegance, making it the perfect choice for weddings, VIP events, or refined business travel. Step inside the Ghost, and you’re welcomed into a world of hand-crafted comfort, whisper-quiet interiors, and seamless technology. Every ride in the Ghost is an effortless journey that blends prestige with modern sophistication.",
  },
  {
    id: "rolls-royce-phantom",
    name: "Rolls Royce Phantom",
    img: [RRPhantom1, RRPhantom2],
    perks: [
      "Iconic Luxury",
      "On-demand Chauffeur",
      "Complimentary refreshments",
    ],
    description:
      "The Rolls Royce Phantom is the pinnacle of automotive luxury, symbolizing power, prestige, and authority. With its commanding design, handcrafted interiors, and unmatched ride comfort, the Phantom ensures you arrive with a statement. Whether it’s high-profile meetings, elite events, or personal indulgence, the Phantom transforms every trip into an unforgettable occasion with timeless Rolls Royce elegance.",
  },
  {
    id: "rolls-royce-cullinan",
    name: "Rolls Royce Cullinan",
    img: [
      RRCullinan1,
      RRCullinan2,
      RRCullinan3,
      RRCullinan4,
      RRCullinan5,
      RRCullinan6,
      RRCullinan7,
      RRCullinan8,
      RRCullinan9,
      RRCullinan10,
      RRCullinan11,
      RRCullinan12,
      RRCullinan13,
      RRCullinan14,
    ],
    perks: [
      "Spacious SUV",
      "Perfect for Long Journeys",
      "Complimentary water & WiFi",
    ],
    description:
      "The Rolls Royce Cullinan redefines the luxury SUV experience. It blends commanding road presence with unmatched comfort, making it ideal for long drives, desert adventures, or city cruising. Its spacious interior provides maximum comfort while offering the sophistication and refinement that only Rolls Royce can deliver. Whether it’s a family trip or an elite business transfer, the Cullinan ensures every journey is both powerful and indulgent.",
  },
];

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  const [activeIdx, setActiveIdx] = useState(0);

  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const SWIPE_THRESHOLD = 50;

  const nextImage = () => setActiveIdx((i) => (i + 1) % vehicle.img.length);

  const prevImage = () =>
    setActiveIdx((i) => (i - 1 + vehicle.img.length) % vehicle.img.length);

  const onPointerDown = (e) => {
    const target = e.target;
    if (target.closest?.(".gallery-arrow") || target.closest?.(".thumb-img")) {
      return;
    }
    if (e.button !== 0 && e.pointerType === "mouse") return;
    draggingRef.current = true;
    startXRef.current = e.clientX ?? 0;
  };
  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    const delta = (e.clientX ?? 0) - startXRef.current;
    draggingRef.current = false;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) prevImage();
      else nextImage();
    }
  };

  const onPointerCancel = () => {
    draggingRef.current = false;
  };

  const onKeyDownMain = (e) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  if (!vehicle) {
    return (
      <Container className="py-5 text-center text-white">
        <h3>Vehicle not found</h3>
      </Container>
    );
  }

  const handleWhatsApp = () => {
    const msg = `Hello, I'm interested in booking the ${vehicle.name}`;
    window.open(
      `https://wa.me/971507012953?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+971507012953";
  };

  return (
    <Container className="py-5 text-white vehicle-detail-page">
      <Row>
        <Col md={7} className="mb-4">
          <div className="vehicle-gallery">
            <div
              className="main-img-wrap"
              role="group"
              aria-label="Vehicle image gallery"
              tabIndex={0}
              onKeyDown={onKeyDownMain}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
            >
              <button
                type="button"
                className="gallery-arrow gallery-arrow-left"
                aria-label="Previous image"
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>

              <img
                src={vehicle.img[activeIdx]}
                alt={vehicle.name}
                className="img-fluid main-img"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />

              <button
                type="button"
                className="gallery-arrow gallery-arrow-right"
                aria-label="Next image"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="thumb-row">
              {vehicle.img.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  loading="lazy"
                  alt={`${vehicle.name} - ${i + 1}`}
                  className={`thumb-img ${i === activeIdx ? "active" : ""}`}
                  onClick={() => setActiveIdx(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && setActiveIdx(i)
                  }
                />
              ))}
            </div>
          </div>
        </Col>

        <Col md={5}>
          <h2 className="vehicle-title mb-3">{vehicle.name}</h2>
          <div className="perks-box mb-3">
            {vehicle.perks.map((p, i) => (
              <div key={i} className="perk-item">
                ✔ {p}
              </div>
            ))}
          </div>

          <div className="vehicle-actions">
            <Button className="btn btn-whatsapp" onClick={handleWhatsApp}>
              <FaWhatsapp /> WhatsApp
            </Button>
            <Button className="btn btn-call" onClick={handleCall}>
              <FaPhoneAlt /> Call
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <div className="vehicle-description-box">
            <h4 className="desc-heading">About the {vehicle.name}</h4>
            <p className="vehicle-description">{vehicle.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleDetail;
