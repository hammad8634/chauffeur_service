// CountryPhoneInput.jsx (you can keep it in the same file above BookingForm)
import React, { useMemo, useState, forwardRef } from "react";
import { InputGroup, Form, Dropdown } from "react-bootstrap";
import countries from "../data/countries.json";
import { FaPhoneAlt } from "react-icons/fa";

// Custom toggle so it looks like an InputGroup prefix (not a Bootstrap button)
const CodeToggle = forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    className="code-toggle"
    onClick={(e) => {
      e.preventDefault();
      onClick?.(e);
    }}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.(e)}
  >
    {children}
  </span>
));

const CountryPhoneInput = ({
  countryCode,
  phone,
  onCodeChange,
  onPhoneChange,
}) => {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(t) ||
        c.code.toLowerCase().includes(t) ||
        c.dial_code.includes(t)
    );
  }, [q]);

  return (
    <div className="phone-field">
      <FaPhoneAlt className="phone-icon" />
      <InputGroup className="phone-group">
        <Dropdown align="start">
          <Dropdown.Toggle as={CodeToggle}>
            {countryCode || "+___"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="code-menu" renderOnMount>
            <div className="code-search-wrap">
              <Form.Control
                type="text"
                placeholder="Search country or code"
                className="code-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                autoFocus
              />
            </div>
            <div className="code-list">
              {filtered.map((c) => (
                <Dropdown.Item
                  key={c.code}
                  onClick={() => {
                    onCodeChange(c.dial_code);
                    setQ("");
                  }}
                >
                  {c.name} <span className="muted">({c.dial_code})</span>
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default CountryPhoneInput;
