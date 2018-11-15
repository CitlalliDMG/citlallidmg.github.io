// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import React, { Component } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";

class Navigation extends Component {
  componentDidMount() {
    $(".navbar-nav>li>a").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="navbar-header pl-lg-5 large">
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
        <div className="navbar-header mobile">
          {/* eslint-disable-next-line */}
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="citlalli-del-moral-web-icon"
            />
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
              <a className="nav-link js-scroll-trigger" href="#home-anchor">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about-anchor">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#work-anchor">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills-anchor">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-anchor">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;

// const Navigation = () => (

//   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//     <div className="navbar-header pl-lg-5 large">
//       {/* eslint-disable-next-line */}
//       <a className="navbar-brand js-scroll-trigger" href="#page-top">
//         <img
//           src={logo}
//           height="30"
//           className="d-inline-block align-top"
//           alt="citlalli-del-moral-web-icon"
//         />
//         CITLALLI
//         <span className="bold"> DEL MORAL</span>
//       </a>
//     </div>
//     <div className="navbar-header mobile">
//       {/* eslint-disable-next-line */}
//       <a className="navbar-brand js-scroll-trigger" href="#page-top">
//         <img
//           src={logo}
//           height="30"
//           className="d-inline-block align-top"
//           alt="citlalli-del-moral-web-icon"
//         />
//       </a>
//     </div>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNavDropdown"
//       aria-controls="navbarNavDropdown"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div
//       className="collapse navbar-collapse navbar-right pr-5"
//       id="navbarNavDropdown"
//     >
//       <ul className="nav navbar-nav ml-auto">
//         <li className="nav-item">
//           <a className="nav-link js-scroll-trigger" href="#home">
//             Inicio
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link js-scroll-trigger" href="#about">
//             Sobre mí
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link js-scroll-trigger" href="#work">
//             Proyectos
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link js-scroll-trigger" href="#skills">
//             Habilidades
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#contact">
//             Contacto
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

// export default Navigation;
