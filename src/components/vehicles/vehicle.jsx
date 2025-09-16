import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./vehicles.css";
import RRGhost from "../../images/rolls-royce-ghost/rolls-royce-ghost-1.jpg";
import RRPhantom from "../../images/rolls-royce-phantom/rolls-royce-phantom-1.jpg";
import RRCullinan from "../../images/rolls-royce-cullinan/rolls-royce-cullinan-1.jpg";

const vehicles = [
    { name: "Rolls Royce Ghost", img: RRGhost, details: ["Ghost White", "2-Tone Gold Roof", "VIP Choice"] },
    { name: "Rolls Royce Phantom", img: RRPhantom, details: ["Phantom White", "Timeless Elegance", "Boardroom Icon"] },
    { name: "Rolls Royce Cullinan", img: RRCullinan, details: ["Luxury SUV", "Elite Comfort", "Perfect for Long Trips"] },
    { name: "Rolls Royce Cullinan", img: RRCullinan, details: ["Luxury SUV", "Elite Comfort", "Perfect for Long Trips"] },
];

const CarShowcase = () => {
    const handleWhatsApp = (vehicle) => {
        const msg = `Hello, I'm interested in booking the ${vehicle.name}`;
        window.open(`https://wa.me/971507012953?text=${encodeURIComponent(msg)}`, "_blank");
    };

    const handleCall = () => (window.location.href = "tel:+971507012953");

    return (
        <section className="luxury-services py-5">
            <Container>
                <h2 className="services-heading text-center mb-5">
                    Our Exclusive Rolls Royce Fleet
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    loop
                    autoplay={{ delay: 23333500, disableOnInteraction: false }}
                    speed={700}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                    className="global-swiper"
                >
                    {vehicles.map((vehicle, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="vehicle-card">
                                <img
                                    src={vehicle.img}
                                    alt={vehicle.name}
                                    className="vehicle-img"
                                    onClick={() =>
                                        (window.location.href = `/vehicle/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}`)
                                    }
                                />
                                <div className="vehicle-content">
                                    <h5 className="vehicle-title">{vehicle.name}</h5>

                                    <div className="vehicle-tags">
                                        {vehicle.details.map((d, i) => (
                                            <span key={i} className="vehicle-tag">{d}</span>
                                        ))}
                                    </div>

                                    <div className="vehicle-actions">
                                        <button className="btn btn-whatsapp" onClick={() => handleWhatsApp(vehicle)}>
                                            WhatsApp
                                        </button>
                                        <button className="btn btn-call" onClick={handleCall}>
                                            Call
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default CarShowcase;
