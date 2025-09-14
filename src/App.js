import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LuxuryNavbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import FAQ from "./components/faq/faq";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <LuxuryNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
