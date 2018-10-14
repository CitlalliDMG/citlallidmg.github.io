import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="navbar-header pl-lg-5">
      {/* eslint-disable-next-line */}
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="citlalli-del-moral-web-icon"
        />
        CITLALLI
        <span className="bold"> DEL MORAL</span>
      </a>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse navbar-right pr-5"
      id="navbarNavDropdown"
    >
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#home">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">
            Sobre mí
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#work">
            Proyectos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">
            Habilidades
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
