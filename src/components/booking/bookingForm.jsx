import React, { useState } from "react";
import { Row, Col, Button, Form, Modal, Container } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";
import "./bookingForm.css";

const BookingForm = ({ mode = "home", showExternal, setShowExternal }) => {
  const [formData, setFormData] = useState({
    location: "",
    pickupTime: "",
    phone: "",
  });

  const [modalData, setModalData] = useState({
    email: "",
    fullName: "",
    comments: "",
  });

  const [show, setShow] = useState(false);

  // Modal control (internal for home, external for navbar)
  const actualShow = mode === "navbar" ? showExternal : show;
  const setActualShow = mode === "navbar" ? setShowExternal : setShow;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleModalChange = (e) =>
    setModalData({ ...modalData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    // validate mandatory 3 fields
    if (!formData.location || !formData.pickupTime || !formData.phone) {
      alert("Please fill Location, Pickup Time and Phone before submitting.");
      return;
    }

    const finalData = { ...formData, ...modalData };
    console.log("Booking Data:", finalData);
    setActualShow(false);
  };

  return (
    <>
      {/* Home Page Flow: Inline form for 3 quick fields */}
      {mode === "home" && (
        <div className="booking-form mx-auto mb-5">
          <Row className="g-3">
            <Col md={4} xs={12}>
              <div className="luxury-input">
                <FaMapMarkerAlt className="luxury-icon" />
                <Form.Select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Pick Up Location
                  </option>
                  <option>Dubai Airport - Terminal 1</option>
                  <option>Dubai Airport - Terminal 2</option>
                  <option>Dubai Airport - Terminal 3</option>
                  <option>Sharjah Airport</option>
                </Form.Select>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="luxury-input">
                <FaCalendarAlt className="luxury-icon" />
                <Form.Control
                  type="datetime-local"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                />
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="luxury-input">
                <FaPhone className="luxury-icon" />
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </Col>

            <Col xs={12}>
              <Button
                className="luxury-btn w-100"
                onClick={() => {
                  if (formData.location && formData.pickupTime && formData.phone) {
                    setShow(true);
                  } else {
                    alert("Please fill all required fields before proceeding.");
                  }
                }}
              >
                Book Now
              </Button>
            </Col>
          </Row>
        </div>
      )}

      {/* Modal for both Home + Navbar */}
      <Modal
        show={actualShow}
        onHide={() => setActualShow(false)}
        centered
        className="booking-modal modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="g-4">
              {/* Navbar mode → show all 5 fields inside modal */}
              {mode === "navbar" && (
                <>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input">
                      <FaMapMarkerAlt className="luxury-icon" />
                      <Form.Select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Pick Up Location
                        </option>
                        <option>Dubai Airport - Terminal 1</option>
                        <option>Dubai Airport - Terminal 2</option>
                        <option>Dubai Airport - Terminal 3</option>
                        <option>Sharjah Airport</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input">
                      <FaCalendarAlt className="luxury-icon" />
                      <Form.Control
                        type="datetime-local"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input">
                      <FaPhone className="luxury-icon" />
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </>
              )}

              {/* Home mode → show first 3 fields as readonly inside modal */}
              {mode === "home" && (
                <>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input readonly">
                      <FaMapMarkerAlt className="luxury-icon" />
                      <Form.Control value={formData.location} readOnly />
                    </div>
                  </Col>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input readonly">
                      <FaCalendarAlt className="luxury-icon" />
                      <Form.Control value={formData.pickupTime} readOnly />
                    </div>
                  </Col>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input readonly">
                      <FaPhone className="luxury-icon" />
                      <Form.Control value={formData.phone} readOnly />
                    </div>
                  </Col>
                </>
              )}

              {/* Extra fields always */}
              <Col lg={6} xs={12}>
                <div className="luxury-input">
                  <FaEnvelope className="luxury-icon" />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={modalData.email}
                    onChange={handleModalChange}
                  />
                </div>
              </Col>
              <Col lg={6} xs={12}>
                <div className="luxury-input">
                  <FaUser className="luxury-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={modalData.fullName}
                    onChange={handleModalChange}
                  />
                </div>
              </Col>
              <Col lg={12} xs={12}>
                <div className="luxury-input">
                  <FaCommentDots className="luxury-icon" />
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Comments"
                    name="comments"
                    value={modalData.comments}
                    onChange={handleModalChange}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setActualShow(false)}>
            Cancel
          </Button>
          <Button className="luxury-btn" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingForm;
