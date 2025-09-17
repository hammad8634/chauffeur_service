import React, { useState } from "react";
import { Container } from "react-bootstrap";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./luxuryServices.css";
import BookingForm from "../booking/bookingForm";

const services = [
    {
        img: "https://imageio.forbes.com/specials-images/imageserve/67e2d9cc7957da265342e809/Blacklane-luxury-chauffeur-service/0x0.jpg?format=jpg&width=960",
        title: "Airport Transfers",
        text: "DXB, DWC, AUH → Hotels / Business Bay / Palm Jumeirah."
    },
    {
        img: "https://protocoltourism.com/wp-content/uploads/2022/05/VIP-Chauffeur.jpg",
        title: "Corporate Chauffeuring",
        text: "Meetings, conferences, and boardroom transfers in style."
    },
    {
        img: "https://www.shutterstock.com/image-photo/chauffeur-packs-suitcase-car-trunk-600nw-2406647113.jpg",
        title: "Weddings & VIP Events",
        text: "Luxury arrival for brides, grooms, and red-carpet entrances."
    },
    {
        img: "https://t3.ftcdn.net/jpg/07/00/33/14/360_F_700331471_sKUGLWgakIK6YSE6TEblh32SgoF8dag1.jpg",
        title: "Hotel Partnerships",
        text: "Pick-ups from Business Bay, Downtown, Palm Jumeirah hotels."
    },
    {
        img: "https://protocoltourism.com/wp-content/uploads/2022/05/VIP-Chauffeur.jpg",
        title: "Dubai Tours in Style",
        text: "Burj Khalifa, Atlantis, Desert Safari, Marina, Palm Jumeirah."
    },
    {
        img: "https://protocoltourism.com/wp-content/uploads/2022/05/VIP-Chauffeur.jpg",
        title: "Abu Dhabi Day Trips",
        text: "Sheikh Zayed Grand Mosque, Yas Island, Emirates Palace tours."
    },
    {
        img: "https://t3.ftcdn.net/jpg/07/00/33/14/360_F_700331471_sKUGLWgakIK6YSE6TEblh32SgoF8dag1.jpg",
        title: "Hourly Chauffeur Service",
        text: "Minimum 3-hour booking for shopping and city cruising."
    },
    {
        img: "https://www.shutterstock.com/image-photo/chauffeur-packs-suitcase-car-trunk-600nw-2406647113.jpg",
        title: "Special Occasions",
        text: "Anniversaries, birthdays, and surprise luxury drives."
    }
];

const LuxuryServices = () => {

    const [showBooking, setShowBooking] = useState(false);

    return (
        <section className="luxury-services py-5">
            <Container>
                <h2 className="services-heading text-center mb-5">
                    Premium Chauffeur Services
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    loop
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={800}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                    className="global-swiper"
                >
                    {services.map((service, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="service-card-carousel" onClick={() => {
                                setShowBooking(true);
                            }}>
                                <img src={service.img} alt={service.title} className="service-img" />
                                <div className="service-content">
                                    <h5 className="service-title">{service.title}</h5>
                                    <p className="service-text">{service.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
            <BookingForm mode="navbar" showExternal={showBooking} setShowExternal={setShowBooking} />

        </section>
    );
};

export default LuxuryServices;
