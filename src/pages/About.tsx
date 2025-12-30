import React from "react";
import "./about.css";
import aboutImage from "../assets/about.jpg";
import aj from "../assets/avalos-jorge.jpeg";
import ks from "../assets/kreisel-sebastian.jpeg";
import ta from "../assets/toledo-augusto.jpeg";

const About: React.FC = () => {
  return (
    <section className="nosotros-container">
      {/* HERO */}
      <div
        className="hero text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 148, 136, 0.75), rgba(13, 148, 136, 0.75)), url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="hero-title">Seguridad Electrónica Tucumán</h1>
        <p className="hero-subtitle">
          Sistemas de seguridad, redes y soluciones tecnológicas a medida
        </p>
      </div>

      {/* QUIÉNES SOMOS */}
      <div className="quienes-somos container py-5">
        <h2 className="section-title text-center mb-4">Quiénes Somos</h2>
        <p className="text-center quienes-text">
          En <b>Seguridad Electrónica Tucumán</b> trabajamos brindando soluciones
          tecnológicas confiables en seguridad electrónica, redes y conectividad.
          Nuestro enfoque está en ofrecer sistemas eficientes, asesoramiento
          honesto y un servicio técnico de calidad para hogares, empresas y zonas
          rurales.
        </p>
      </div>

      {/* MISIÓN Y VISIÓN */}
      <div className="mision-vision container py-4 row text-center">
        <div className="col-md-6 mb-4 mb-md-0 mv-card">
          <h3>Misión</h3>
          <p>
            Brindar soluciones tecnológicas confiables que garanticen seguridad,
            eficiencia y tranquilidad a nuestros clientes.
          </p>
        </div>

        <div className="col-md-6 mv-card">
          <h3>Visión</h3>
          <p>
            Ser una empresa referente en seguridad electrónica, reconocida por
            la innovación, el compromiso y la confianza.
          </p>
        </div>
      </div>

      {/* EQUIPO */}
      <div className="equipo container py-5">
        <h2 className="section-title text-center mb-5">Nuestro Equipo</h2>

        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-3 text-center">
            <div className="team-card">
              <img src={ks} alt="Kreisel Sebastian" className="team-img" />
              <p className="team-role">Técnico Electrónico</p>
              <h5 className="team-name">Kreisel Sebastian</h5>
            </div>
          </div>

          <div className="col-6 col-md-3 text-center">
            <div className="team-card">
              <img src={aj} alt="Avalos Jorge" className="team-img" />
              <p className="team-role">Técnico Informático</p>
              <h5 className="team-name">Avalos Jorge</h5>
            </div>
          </div>

          <div className="col-6 col-md-3 text-center">
            <div className="team-card">
              <img src={ta} alt="Toledo Augusto" className="team-img" />
              <p className="team-role">Especialista en Alarmas</p>
              <h5 className="team-name">Toledo Augusto</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
