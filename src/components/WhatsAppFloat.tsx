import "./WhatsAppFloat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/543816950652"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <button className="whatsapp-btn">
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>
    </a>
  );
};

export default WhatsAppFloat;
