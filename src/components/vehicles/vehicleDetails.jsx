import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Row, Col, Modal } from "react-bootstrap";
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
import RRGhost8 from "../../images/rolls-royce-ghost/rolls-royce-ghost-8.jpg";

import RRCullinanBlack1 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-1.jpg";
import RRCullinanBlack2 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-2.jpg";
import RRCullinanBlack3 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-3.jpg";
import RRCullinanBlack4 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-4.jpg";
import RRCullinanBlack5 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-5.jpg";
import RRCullinanBlack6 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-6.jpg";
import RRCullinanBlack7 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-7.jpg";
import RRCullinanBlack8 from "../../images/rolls-royce-cullinan-black/rolls-royce-cullinan-8.jpg";

import RRPhantom1 from "../../images/rolls-royce-phantom/rolls-royce-phantom-1.png";

import RRCullinanGrey1 from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (1).jpg";
import RRCullinanGrey2 from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (2).jpg";
import RRCullinanGrey3 from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (3).jpg";
import RRCullinanGrey4 from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (4).jpg";
import RRCullinanGrey5 from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (5).jpg";
import RRCullinanGrey6 from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (6).jpg";
import RRCullinanGrey7 from "../../images/rolls-royce-cullinan-light-grey/rolls-royce-cullinan-light-grey- (7).jpg";

import RRGhostSeriesIII from "../../images/rolls-royce-ghost-series-III/rolls-royce-ghost-series-III.jpg";

const vehicles = [
  {
    id: "rolls-royce-ghost",
    name: "Rolls Royce Ghost",
    img: [
      RRGhost1,
      RRGhost2,
      RRGhost3,
      RRGhost4,
      RRGhost5,
      RRGhost6,
      RRGhost7,
      RRGhost8,
    ],
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
    id: "rolls-royce-cullinan-black",
    name: "Rolls Royce Cullinan Black",
    img: [
      RRCullinanBlack1,
      RRCullinanBlack2,
      RRCullinanBlack3,
      RRCullinanBlack4,
      RRCullinanBlack5,
      RRCullinanBlack6,
      RRCullinanBlack7,
      RRCullinanBlack8,
    ],
    perks: [
      "Stealth Black Pack styling with imposing grille",
      "Air-suspension comfort ideal for long highway journeys",
      "Chauffeur option with fuel, tolls, and parking on request",
      "Complimentary water, onboard Wi-Fi, and phone chargers",
    ],
    description:
      "The Rolls Royce Cullinan Black is where stealth aesthetics meet supreme practicality. Its deep-black exterior and Black Pack accents create an unmistakably commanding presence, while the elevated seating position delivers a confident, panoramic view of the road. Inside, the cabin is a sanctuary of silence—meticulously insulated and trimmed in premium materials—so conversations feel private and navigation cues are crystal clear. The air suspension glides over city streets and highways alike, ensuring passengers arrive composed after long journeys or VIP transfers. With effortless V12 power, the Cullinan Black accelerates smoothly and quietly, maintaining absolute poise in traffic and on open roads. Pair it with a professional chauffeur for a turn-key luxury experience, complete with complimentary refreshments, Wi-Fi, and device charging. Ideal for executive travel, red-carpet arrivals, and discreet high-profile movements.",
  },
  {
    id: "rolls-royce-phantom",
    name: "Rolls Royce Phantom",
    img: [RRPhantom1],
    perks: [
      "Iconic Luxury",
      "On-demand Chauffeur",
      "Complimentary refreshments",
    ],
    description:
      "The Rolls Royce Phantom is the pinnacle of automotive luxury, symbolizing power, prestige, and authority. With its commanding design, handcrafted interiors, and unmatched ride comfort, the Phantom ensures you arrive with a statement. Whether it’s high-profile meetings, elite events, or personal indulgence, the Phantom transforms every trip into an unforgettable occasion with timeless Rolls Royce elegance.",
  },
  {
    id: "rolls-royce-cullinan-silver-grey",
    name: "Rolls Royce Cullinan Grey",
    img: [
      RRCullinanGrey1,
      RRCullinanGrey2,
      RRCullinanGrey3,
      RRCullinanGrey4,
      RRCullinanGrey5,
      RRCullinanGrey6,
      RRCullinanGrey7,
    ],
    perks: [
      "Pristine grey finish ideal for weddings and premium events",
      "Spacious rear seating with executive comfort features",
      "Professional chauffeur service available on demand",
      "Complimentary refreshments, Wi-Fi, and premium amenities",
    ],
    description:
      "The Rolls Royce Cullinan Grey is the definitive full-size luxury SUV for ceremonial moments and elevated occasions. Its pristine finish photographs beautifully under daylight and venue lighting, making it a favorite for weddings, brand activations, and VIP receptions. Step inside to discover a lounge-like interior with generous headroom and legroom, ultra-plush seating, and a whisper-quiet ambiance that turns every kilometer into a calm retreat. Intelligent suspension actively smooths out road imperfections, while the vehicle’s confident stance and effortless power convey status without drama. From curated routes to coordinated event timing, our experienced chauffeurs ensure arrivals are seamless and dignified. Complimentary bottled water, Wi-Fi, and charging keep guests refreshed and connected. Whether transporting a bridal party, hosting executives, or escorting dignitaries, the Cullinan White delivers immaculate comfort and a timeless, photogenic presence.",
  },
  {
    id: "rolls-royce-ghost-series-iii",
    name: "Rolls Royce Ghost Series III",
    img: [RRGhostSeriesIII],
    perks: [
      "Planar 'Magic Carpet' ride for exceptional smoothness",
      "Ultra-quiet cabin with Starlight headliner ambiance",
      "Executive rear lounge seating with enhanced legroom",
      "Complimentary refreshments, chargers, and bottled water",
    ],
    description:
      "The Rolls Royce Ghost Series III embodies modern minimalism backed by effortless performance. Its clean, contemporary design projects quiet confidence—equally suited to C-suite travel, embassy duties, or premium personal occasions. Inside, a meticulously crafted cabin isolates outside noise, allowing low-voice conversations and focused work on the move. The renowned Planar ‘Magic Carpet’ suspension glides over uneven surfaces with composure, while advanced driver assistance and seamless infotainment make every journey intuitive. Rear passengers enjoy generous legroom, soft-close doors, and signature Rolls-Royce details such as the Starlight headliner, creating a soothing, private ambiance. With smooth, reserve-rich acceleration, the Ghost moves with dignified ease through city streets and across inter-emirate routes. Enjoy complimentary refreshments, charging, and concierge-level support. For clients who value precision, discretion, and contemporary luxury, the Ghost Series III sets a new benchmark in refined travel.",
  },
];

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const SWIPE_THRESHOLD = 50;

  const nextImage = () => setActiveIdx((i) => (i + 1) % vehicle.img.length);

  const prevImage = () =>
    setActiveIdx((i) => (i - 1 + vehicle.img.length) % vehicle.img.length);

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

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
    if (e.key === "Enter") openLightbox();
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
      `https://wa.me/971567766002?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+971567766002";
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
                onClick={openLightbox}
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

      <Modal
        show={lightboxOpen}
        onHide={closeLightbox}
        centered
        fullscreen
        className="vehicle-lightbox"
      >
        <button
          type="button"
          className="lightbox-close"
          aria-label="Close"
          onClick={closeLightbox}
        >
          ×
        </button>

        <div
          className="lightbox-stage"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "Escape") closeLightbox();
          }}
          onPointerDown={(e) => {
            if (e.button !== 0 && e.pointerType === "mouse") return;
            draggingRef.current = true;
            startXRef.current = e.clientX ?? 0;
          }}
          onPointerUp={(e) => {
            if (!draggingRef.current) return;
            const delta = (e.clientX ?? 0) - startXRef.current;
            draggingRef.current = false;
            if (Math.abs(delta) > SWIPE_THRESHOLD) {
              if (delta > 0) prevImage();
              else nextImage();
            }
          }}
          onPointerCancel={() => (draggingRef.current = false)}
        >
          <button
            type="button"
            className="gallery-arrow gallery-arrow-left lightbox-arrow"
            aria-label="Previous image"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={vehicle.img[activeIdx]}
            alt={`${vehicle.name} enlarged`}
            className="lightbox-img"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />

          <button
            type="button"
            className="gallery-arrow gallery-arrow-right lightbox-arrow"
            aria-label="Next image"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>

        <button
          type="button"
          className="lightbox-close-bottom"
          onClick={closeLightbox}
        >
          Close
        </button>
      </Modal>

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
