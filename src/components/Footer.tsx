import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column" translate = "no">
          <h5>
            <FontAwesomeIcon icon={faShieldAlt} className="icon" /> S.E.T
          </h5>
          <p><b>Seguridad Electronica Tucumán</b></p>
        </div>

        <div className="footer-column">
          <h5>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contacto
          </h5>
          <p><b>set.tucuman@gmail.com</b></p>
        </div>

        <div className="footer-column whatsapp-column">
          <h5>
            <FontAwesomeIcon icon={faWhatsapp} className="icon" /> WhatsApp
          </h5>
          <a
            href="https://wa.me/543816950652"
            target="_blank"
            rel="noopener noreferrer"
          >
            S.E.T <b>|</b> +54 381 695 0652
          </a>
        </div>

        <div className="footer-column">
          <h5>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Ubicación
          </h5>
          <p>Tucumán, Argentina</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 SET — Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
