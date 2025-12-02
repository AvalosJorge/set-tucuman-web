import React from "react";
import slide1 from "../assets/img1.png";
import slide2 from "../assets/img2.png";
import slide3 from "../assets/img3.png";
import "./Carousel.css";

const Carousel: React.FC = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade custom-carousel"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-overlay"></div>
          <img src={slide1} className="d-block w-100" alt="Primera imagen" />
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img src={slide2} className="d-block w-100" alt="Segunda imagen" />
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img src={slide3} className="d-block w-100" alt="Tercera imagen" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Carousel;
