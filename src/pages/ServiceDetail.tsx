import React from "react";
import { useParams, NavLink } from "react-router-dom";
import "./ServiceDetail.css";
import img1 from "../assets/servicio1.jpg";
import img2 from "../assets/servicio2.jpg";
import img3 from "../assets/servicio3.jpg";
import img4 from "../assets/servicio4.jpg";
import img55 from "../assets/servicio55.jpg";
import img6 from "../assets/servicio6.jpg";
import img7 from "../assets/servicio7.jpg";
import img8 from "../assets/servicio8.jpg";

const services = [
  { id: 1, title: "Cámaras de Seguridad", desc: "Instalación y monitoreo de cámaras IP y analógicas, con grabación continua y acceso remoto desde celular o PC.", img: img1 },

  { id: 2, title: "Redes Inalámbricas y Cableadas", desc: "Diseño, instalación y optimización de redes WiFi y cableadas. Incluye tendido estructurado, configuración de routers, repetidores y puntos de acceso, garantizando una conexión estable, segura y de alta velocidad.", img: img2 },

  { id: 3, title: "Servicio Técnico de Computadoras", desc: "Diagnóstico, reparación y mantenimiento de computadoras de escritorio y notebooks. Limpieza profunda, formateo, actualización de hardware, recuperación de datos y optimización de rendimiento.", img: img4 },

  { id: 4, title: "Centrales Telefónicas y Porteros", desc: "Instalación y programación de centrales telefónicas IP/analógicas y sistemas de porteros o videoporteros. Integración con cámaras, apertura remota y múltiples extensiones para oficinas y hogares.", img: img3 },

  { id: 5, title: "Sistemas Solares", desc: "Diseño e instalación de sistemas solares fotovoltaicos para ahorro energético. Incluye cálculo de consumo, paneles solares, reguladores, inversores y bancos de baterías para uso domiciliario o comercial.", img: img55 },

  { id: 6, title: "Instalación Starlink", desc: "Montaje, alineación y configuración de antenas Starlink para obtener internet satelital de alta velocidad. Optimización del rendimiento, fijaciones seguras y distribución del servicio dentro del domicilio.", img: img6 },

  { id: 7, title: "Enlaces Punto a Punto", desc: "Implementación de enlaces inalámbricos de largo alcance para unir dos o más ubicaciones. Ideal para llevar internet o cámaras entre casas, galpones, fincas o empresas, con equipos Ubiquiti.", img: img7 },

  { id: 8, title: "Control de Accesos", desc: "Instalación de sistemas de control de ingreso mediante tarjetas, huellas, claves o reconocimiento facial. Gestión de horarios, registros de entrada/salida y apertura remota para empresas y edificios.", img: img8 },
];

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const selected = services.find((srv) => srv.id === Number(id)) || services[0];

  return (
    <section className="service-detail-container">
      {/* Sidebar */}
      <aside className="service-list">
        {services.map((srv) => (
          <NavLink
            key={srv.id}
            to={`/services/${srv.id}`}
            className={({ isActive }) => `service-item ${isActive ? "active" : ""}`}
          >
            {srv.title}
          </NavLink>
        ))}
      </aside>

      {/* Detail section */}
      <div className="service-content">
        <img src={selected.img} alt={selected.title} className="service-img" />
        <h2 className="service-title">{selected.title}</h2>
        <p className="service-desc">{selected.desc}</p>
      </div>
    </section>
  );
};

export default ServiceDetail;
