import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LuxuryNavbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import FAQ from "./components/faq/faq";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import VehicleDetail from "./components/vehicles/vehicleDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <LuxuryNavbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
