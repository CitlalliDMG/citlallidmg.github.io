import React from 'react';
import './Work.css';
import labdash from '../../assets/portada_labdash.png';
import labcar from '../../assets/portada_lab_car.png';
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
        <div className="responsive">
          <div className="gallery">
            <img src={lux} alt="portada_proyecto_lux" className="image" width="600" height="400"/>
            <div className="middle">
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://citlallidmg.github.io/cdmx-2018-06-bc-core-am-social-network/src/index.html">Demo</a>
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/CitlalliDMG/cdmx-2018-06-bc-core-am-social-network">GitHub</a>
            </div>
          </div>
            <div className="project-info">
              <p className="project-title">LUX Red Social</p>
              <p className="project-description"><span className="italic">Desarrollo web</span>{'\nMobile first, HTML, CSS, JS, Firebase, UX'}</p>
            </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <img src={labdash} alt="portada_proyecto_labdash" className="image" width="600" height="400"/>
            <div className="middle">
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://citlallidmg.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/index.html">Demo</a>
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/CitlalliDMG/cdmx-2018-06-bc-core-am-data-dashboard">GitHub</a>
            </div>
          </div>
            <div className="project-info">
              <p className="project-title">Lab-Dash</p>
              <p className="project-description"><span className="italic">Desarrollo web</span>{'\nResponsive Design, HTML, CSS, JS, Fetch'}</p>
            </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <img src={labcar} alt="portada_proyecto_labcar" className="image" width="600" height="400"/>
            <div className="middle">
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://citlallidmg.github.io/lab-car/src/index.html">Demo</a>
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/CitlalliDMG/lab-car">GitHub</a>
            </div>
          </div>
            <div className="project-info">
              <p className="project-title">LabCar</p>
              <p className="project-description"><span className="italic">Desarrollo web</span>{'\nResponsive Design, HTML, CSS'}</p>
            </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <img src={pasea} alt="portada_proyecto_labdash" className="image" width="600" height="400"/>
            <div className="middle">
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/61570269/PASEA-Service-design-Web-App">Bēhance</a>
            </div>
          </div>
            <div className="project-info">
              <p className="project-title">Pasea Turismo Incluyente</p>
              <p className="project-description"><span className="italic">Diseño</span>{'\nDiseño de servicios, Identidad Corporativa, UX, Diseño de interfaz, Maquetado'}</p>
            </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <img src={raices} alt="portada_proyecto_labdash" className="image" width="600" height="400"/>
            <div className="middle">
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/38750703/Raices-de-Mxico-App-Design">Bēhance</a>
            </div>
          </div>
            <div className="project-info">
              <p className="project-title">Raíces de México</p>
              <p className="project-description"><span className="italic">Diseño</span>{'\nMaquetado, Investigación de usuario, Identidad corporativa, Diseño de interfaz'}</p>
            </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <img src={chipinque} alt="portada_proyecto_labdash" className="image" width="600" height="400"/>
            <div className="middle">
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/38749017/Chipinque-Web-Design">Bēhance</a>
            </div>
          </div>
            <div className="project-info">
              <p className="project-title">Chipinque</p>
              <p className="project-description"><span className="italic">Diseño</span>{'\nMaquetado, Diseño de interfaz, Identidad corporativa'}</p>
            </div>
        </div>
        <div className="clearfix">
        </div>
      </div>
    </section>
   );
}

export default Work;
