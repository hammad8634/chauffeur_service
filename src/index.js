// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "leaflet/dist/leaflet.css";

import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
});
// index.js (temporary)
console.log("EMAILJS PUBLIC KEY:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
