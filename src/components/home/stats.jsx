import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./home.css";
import { FaStar } from "react-icons/fa";

const Stats = () => {
    const stats = [
        { number: 150, suffix: "+", label: "Luxury Cars" },
        { number: 8000, suffix: "+", label: "Satisfied Clients" },
        { number: 200, suffix: "+", label: "Corporate Partnerships" },
        { number: 10, suffix: "+ Years", label: "Premium Services" },
        { number: 4.9, suffix: "", label: "Customer Ratings" },
    ];

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <section ref={ref} className="stats-section text-center py-5">
            <Container>
                <motion.h2
                    className="stats-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Step Into the World of Luxury
                </motion.h2>
                <motion.p
                    className="stats-subtitle"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Experience, trust, and unmatched service crafted over the years.
                </motion.p>

                <Row className="mt-5 justify-content-evenly">
                    {stats.map((stat, idx) => (
                        <Col lg={2} md={4} sm={6} xs={12} key={idx} className="mb-4">
                            <div className="stat-card">
                                <h3 className="stat-number">
                                    {inView && (
                                        <motion.span
                                            initial={{ y: 40, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                                        >
                                            <CountUp
                                                end={stat.number}
                                                duration={2.5}
                                                decimals={stat.number % 1 !== 0 ? 1 : 0}
                                            />
                                        </motion.span>
                                    )}{" "}
                                    {stat.suffix}

                                    {stat.label === "Customer Ratings" && (
                                        <FaStar style={{ color: "#c0a062", marginLeft: "6px" }} />
                                    )}
                                </h3>

                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Stats;
