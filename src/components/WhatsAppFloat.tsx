import React, { useState } from "react";
import "./WhatsAppFloat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppFloat: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="whatsapp-float">
      <button
        className={`whatsapp-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>

      {open && (
        <div className="whatsapp-menu">
          <a
            href="https://wa.me/543815265876"
            target="_blank"
            rel="noopener noreferrer"
          >
           Kreisel Sebastian
          </a>
          <a
            href="https://wa.me/543814649027"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avalos Jorge
          </a>
          <a
            href="https://wa.me/543816950652"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toledo Augusto
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat;
