import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/servicio1.jpg";
import img2 from "../assets/servicio2.jpg";
import img3 from "../assets/servicio3.jpg";
import img4 from "../assets/servicio4.jpg";
import img5 from "../assets/servicio5.jpg";
import img6 from "../assets/servicio6.jpg";
import img7 from "../assets/servicio7.jpg";
import img8 from "../assets/servicio8.jpg";
import "./ServicesCards.css";

const ServicesCards: React.FC = () => {
  const services = [
    {
      id: 1,
      img: img1,
      title: "Cámaras de seguridad",
      desc: "",
    },
    {
      id: 2,
      img: img2,
      title: "Instalación y mantenimiento de redes inalámbricas y cableadas",
      desc: "",
    },
    {
      id: 3,
      img: img4,
      title: "Servicio técnico de computadoras personales y servidores de datos",
      desc: "",
    },
    {
      id: 4,
      img: img3,
      title: "Instalación y mantenimiento de centrales telefónicas y porteros eléctricos",
      desc: "",
    },
    {
      id: 5,
      img: img5,
      title: "Sistemas de alumbrado y cámaras de seguridad con paneles solares",
      desc: "",
    },
    {
      id: 6,
      img: img6,
      title: "Instalación y configuración de redes y antena Starlink",
      desc: "",
    },
    {
      id: 7,
      img: img7,
      title: "Enlaces punto a punto",
      desc: "",
    },
    {
      id: 8,
      img: img8,
      title: "Control de accesos",
      desc: "",
    },
  ];

  const firstGroup = services.slice(0, 4);
  const secondGroup = services.slice(4, 8);

  return (
    <section className="services-section">
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5 section-title">
          Principales Servicios y Productos
        </h2>

        <div className="row g-4 mb-5">
          {firstGroup.map((srv) => (
            <div key={srv.id} className="col-12 col-sm-6 col-lg-3">
              <Link to={`/services/${srv.id}`} className="card service-card h-100 text-decoration-none">
                <img src={srv.img} className="card-img-top" alt={srv.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{srv.title}</h5>
                  <p className="card-text">{srv.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-center fw-bold mb-5 section-title">
          Soluciones solares para campos y fincas
        </h2>

        <div className="row g-4">
          {secondGroup.map((srv) => (
            <div key={srv.id} className="col-12 col-sm-6 col-lg-3">
              <Link to={`/services/${srv.id}`} className="card service-card h-100 text-decoration-none">
                <img src={srv.img} className="card-img-top" alt={srv.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{srv.title}</h5>
                  <p className="card-text">{srv.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
