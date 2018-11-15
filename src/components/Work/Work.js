import React from 'react';
import './Work.css';
import labdash from '../../assets/portada_labdash.png';
// import labcar from '../../assets/portada_lab_car.png';
import burgerqueen from '../../assets/portada_burger_queen.png';
import lux from '../../assets/portada_lux.png';
import pasea from '../../assets/portada_pasea_turismo_incluyente.png';
import raices from '../../assets/portada_raices_de_mexico.png';
import chipinque from '../../assets/portada_chipinque.png';

const Work = () => {
  return (
    <section className="work" id="work">
      <h2>Proyectos</h2>
      <div className="container">
        <hr/>
        <div className="row">
          <div className="col-md-5 col-lg-3 card">
              <img src={burgerqueen} alt="portada proyecto burger queen" className="image"/>
              <div className="row">
                <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://citlallidmg.github.io/burger-queen-react/">Demo</a>
                <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://github.com/CitlalliDMG/burger-queen-react">GitHub</a>
              </div>
              <div className="project-info">
                <p className="project-title">Burger Queen</p>
                <p className="project-description"><span className="italic">Desarrollo web</span>{'\nReact, Responsive Design, Firebase, PWA'}</p>
              </div>
          </div>
          <div className="col-md-5 col-lg-3 card">
            <img src={lux} alt="portada proyecto lux" className="image" width="600" height="400"/>
            <div className="row">
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://citlallidmg.github.io/cdmx-2018-06-bc-core-am-social-network/src/index.html">Demo</a>
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://github.com/CitlalliDMG/cdmx-2018-06-bc-core-am-social-network">GitHub</a>
            </div>
            <div className="project-info">
              <p className="project-title">LUX Red Social</p>
              <p className="project-description"><span className="italic">Desarrollo web</span>{'\nMobile first, HTML, CSS, JS, Firebase, UX'}</p>
            </div>
          </div>
          <div className="col-md-5 col-lg-3 card">
            <img src={labdash} alt="portada proyecto labdash" className="image" width="600" height="400"/>
            <div className="row">
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://citlallidmg.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/index.html">Demo</a>
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://github.com/CitlalliDMG/cdmx-2018-06-bc-core-am-data-dashboard">GitHub</a>
            </div>
            <div className="project-info">
              <p className="project-title">Lab-Dash</p>
              <p className="project-description"><span className="italic">Desarrollo web</span>{'\nResponsive Design, HTML, CSS, JS, Fetch'}</p>
            </div>
          </div>
          <div className="col-md-5 col-lg-3 card">
            <img src={pasea} alt="portada proyecto pasea turismo incluyente" className="image" width="600" height="400"/>
            <div className="row">
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/61570269/PASEA-Service-design-Web-App">Bēhance</a>
            </div>
            <div className="project-info">
              <p className="project-title">Pasea Turismo Incluyente</p>
              <p className="project-description"><span className="italic">Diseño</span>{'\nDiseño de servicios, Identidad Corporativa, UX, Diseño de interfaz, Maquetado'}</p>
            </div>
          </div>
          <div className="col-md-5 col-lg-3 card">
            <img src={raices} alt="portada proyecto raices de méxico" className="image" width="600" height="400"/>
            <div className="row">
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/38750703/Raices-de-Mxico-App-Design">Bēhance</a>
            </div>
            <div className="project-info">
              <p className="project-title">Raíces de México</p>
              <p className="project-description"><span className="italic">Diseño</span>{'\nMaquetado, Investigación de usuario, Identidad corporativa, Diseño de interfaz'}</p>
            </div>
          </div>
          <div className="col-md-5 col-lg-3 card">
            <img src={chipinque} alt="portada proyecto chipinque" className="image" width="600" height="400"/>
              <div className="row">
                <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/38749017/Chipinque-Web-Design">Bēhance</a>
              </div>
              <div className="project-info">
              <p className="project-title">Chipinque</p>
              <p className="project-description"><span className="italic">Diseño</span>{'\nMaquetado, Diseño de interfaz, Identidad corporativa'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}

export default Work;
