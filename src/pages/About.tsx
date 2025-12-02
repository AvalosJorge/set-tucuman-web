import React from "react";
import "./about.css";
import aboutImage from "../assets/about.jpg";
import aj from "../assets/avalos-jorge.jpeg";
import ks from "../assets/kreisel-sebastian.jpeg";
import ta from "../assets/toledo-augusto.jpeg";

const About: React.FC = () => {
  return (
    <section className="nosotros-container">
      {/* Hero con fondo */}
      <div
        className="hero text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 148, 136, 0.7), rgba(13, 148, 136, 0.7)), url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="hero-title">S.E.T</h1>
        <p className="hero-subtitle">
          Comprometidos con la seguridad y mejoras tecnológicas.
        </p>
      </div>

      {/* Quiénes somos */}
      <div className="quienes-somos container py-5">
        <h2 className="section-title text-center mb-4">Quiénes Somos</h2>
        <p className="text-center quienes-text">
          <b>Seguridad Electrónica Total</b> es una empresa dedicada a brindar soluciones
          integrales en sistemas de seguridad, redes y tecnología para hogares,
          empresas y campos.
        </p>
      </div>

      {/* Misión y Visión */}
      <div className="mision-vision container py-3 row text-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h3>Misión</h3>
          <p>
            Brindar soluciones tecnológicas que garanticen seguridad y eficiencia.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Visión</h3>
          <p>
            Ser líderes en innovación y confianza dentro del sector de seguridad electrónica.
          </p>
        </div>
      </div>

      {/* Nuestro Equipo */}
      <div className="equipo container py-5">
        <h2 className="section-title text-center mb-5">Nuestro Equipo</h2>
        <div className="row g-4 justify-content-center">
          {/* Integrante 1 */}
          <div className="col-6 col-md-3 text-center">
            <div className="team-card p-3">
              <img src={ks} alt="Kreisel Sebastian" className="team-img mb-3" />
              <h5 className="team-name">Kreisel Sebastian</h5>
              <p className="team-role">Técnico Electrónico y CCTV</p>
            </div>
          </div>

          {/* Integrante 2 */}
          <div className="col-6 col-md-3 text-center">
            <div className="team-card p-3">
              <img src={aj} alt="Avalos Jorge" className="team-img mb-3" />
              <h5 className="team-name">Avalos Jorge</h5>
              <p className="team-role">Técnico Informático</p>
            </div>
          </div>

          {/* Integrante 3 */}
          <div className="col-6 col-md-3 text-center">
            <div className="team-card p-3">
              <img src={ta} alt="Toledo Augusto" className="team-img mb-3" />
              <h5 className="team-name">Toledo Augusto</h5>
              <p className="team-role">Especialista en Alarmas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
