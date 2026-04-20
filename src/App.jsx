import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import History from "./History";
import FAQ from "./FAQ";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays at the top of every page */}
      <nav className="navbar">
        <div className="nav-logo">🛡️ PHISH-PRO AI</div>
        <div className="nav-links">
          <Link to="/">Scanner</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </nav>

      {/* Page Switcher */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
