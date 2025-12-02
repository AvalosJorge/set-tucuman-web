import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top custom-nav ${
        expanded ? "expanded" : ""
      }`}
    >
      <div className="container-fluid px-4">
        {/* 🔹 Logo como NavLink para navegación SPA */}
        <div className="navbar-brand d-flex align-items-center">
          <NavLink to="/" className="logo-link" onClick={() => setExpanded(false)}>
            <img src={logo} alt="Logo" className="nav-logo me-2" />
          </NavLink>
          <span className="brand-text">Seguridad Electronica Tucumán</span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            expanded ? "show fade-in" : "fade-out"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={() => setExpanded(false)}
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={() => setExpanded(false)}
              >
                Nosotros
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={() => setExpanded(false)}
              >
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={() => setExpanded(false)}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
