import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Modal,
  Container,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";
import "./bookingForm.css";
import emailjs from "@emailjs/browser";
import countries from "../../data/countries.json";

const CountryPhoneInput = ({
  countryCode,
  phone,
  onCodeChange,
  onPhoneChange,
}) => {
  return (
    <div className="luxury-input">
      <InputGroup>
        <Dropdown onSelect={(code) => onCodeChange(code)}>
          <Dropdown.Toggle as={InputGroup.Text} className="code-toggle">
            {countryCode || "+___"}
          </Dropdown.Toggle>

          <Dropdown.Menu className="code-menu">
            {countries.map((c) => (
              <Dropdown.Item eventKey={c.dial_code} key={c.code}>
                {c.name} ({c.dial_code})
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};

const emirates = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
];

const BookingForm = ({ mode = "home", showExternal, setShowExternal }) => {
  const [formData, setFormData] = useState({
    emirate: "",
    pickupTime: "",
    phone: "",
    countryCode: "+971",
    locationDetails: "",
  });

  const [modalData, setModalData] = useState({
    email: "",
    fullName: "",
    comments: "",
  });

  const [show, setShow] = useState(false);

  const actualShow = mode === "navbar" ? showExternal : show;
  const setActualShow = mode === "navbar" ? setShowExternal : setShow;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleModalChange = (e) =>
    setModalData({ ...modalData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!formData.emirate || !formData.pickupTime || !formData.phone) {
      alert(
        "Please select Emirate, Pickup Time and enter Phone before submitting."
      );
      return;
    }

    const params = {
      to_email: "info@rollsroycetransfers.com",

      location: formData.emirate,
      pickup_time: formData.pickupTime,

      phone: `${formData.countryCode} ${formData.phone}`,

      user_email: modalData.email,
      full_name: modalData.fullName,
      comments: modalData.comments,

      country_code: formData.countryCode,
      emirate: formData.emirate,
      location_details: formData.locationDetails,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        params,
        "YOUR_PUBLIC_KEY"
      );
      alert("Thanks! Your booking request has been sent.");
      setActualShow(false);
    } catch (e) {
      console.error(e);
      alert("Could not send your request. Please try again.");
    }
  };

  return (
    <>
      {/* Home Page Flow */}
      {mode === "home" && (
        <div className="booking-form mx-auto mb-5">
          <Row className="g-3">
            <Col md={4} xs={12}>
              <div className="luxury-input">
                <FaMapMarkerAlt className="luxury-icon" />
                <Form.Select
                  name="emirate"
                  value={formData.emirate}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Emirate
                  </option>
                  {emirates.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Col>

            {/* Date/Time */}
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
              <CountryPhoneInput
                countryCode={formData.countryCode}
                phone={formData.phone}
                onCodeChange={(code) =>
                  setFormData((s) => ({ ...s, countryCode: code }))
                }
                onPhoneChange={(val) =>
                  setFormData((s) => ({ ...s, phone: val }))
                }
              />
            </Col>

            <Col xs={12}>
              <Button
                className="luxury-btn w-100"
                onClick={() => {
                  if (
                    formData.emirate &&
                    formData.pickupTime &&
                    formData.phone
                  ) {
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

      {/* Modal */}
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
              {mode === "navbar" && (
                <>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input">
                      <FaMapMarkerAlt className="luxury-icon" />
                      <Form.Select
                        name="emirate"
                        value={formData.emirate}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Emirate
                        </option>
                        {emirates.map((e) => (
                          <option key={e} value={e}>
                            {e}
                          </option>
                        ))}
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

                  <Col lg={12} xs={12}>
                    <CountryPhoneInput
                      countryCode={formData.countryCode}
                      phone={formData.phone}
                      onCodeChange={(code) =>
                        setFormData((s) => ({ ...s, countryCode: code }))
                      }
                      onPhoneChange={(val) =>
                        setFormData((s) => ({ ...s, phone: val }))
                      }
                    />
                  </Col>
                </>
              )}

              {mode === "home" && (
                <>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input readonly">
                      <FaMapMarkerAlt className="luxury-icon" />
                      <Form.Control value={formData.emirate} readOnly />
                    </div>
                  </Col>
                  <Col lg={6} xs={12}>
                    <div className="luxury-input readonly">
                      <FaCalendarAlt className="luxury-icon" />
                      <Form.Control value={formData.pickupTime} readOnly />
                    </div>
                  </Col>

                  <Col lg={6} xs={12}>
                    <CountryPhoneInput
                      countryCode={formData.countryCode}
                      phone={formData.phone}
                      onCodeChange={(code) =>
                        setFormData((s) => ({ ...s, countryCode: code }))
                      }
                      onPhoneChange={(val) =>
                        setFormData((s) => ({ ...s, phone: val }))
                      }
                    />
                  </Col>
                </>
              )}

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

              <Col lg={6} xs={12}>
                <div className="luxury-input">
                  <Form.Control
                    type="text"
                    placeholder="Location Details (Full Address)"
                    name="locationDetails"
                    value={formData.locationDetails}
                    onChange={handleChange}
                  />
                </div>
              </Col>

              <Col lg={12} xs={12}>
                <div className="luxury-input">
                  <FaCommentDots className="luxury-icon" />
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="(Optional) Comments"
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
