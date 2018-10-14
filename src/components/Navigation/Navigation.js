import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-between">
    <div className="container">
      <div className="navbar-header">
        {/* eslint-disable-next-line */}
        <a className="navbar-brand" href="#page-top">
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
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#frontend">
              Front-end
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#design">
              Design
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cv">
              CV
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
