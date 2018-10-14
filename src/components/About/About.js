import React from 'react';
import './About.css'
import profile from '../../assets/about_Citlalli_Del_Moral_1.png';

const About = () => {
  return (
    <section className="container" id="about">
      <div className="row">
        <div className="about-text col-lg-6">
          <h2>Acerca de mí</h2>
          <hr/>
          <p>
          Mi interés por la tecnología me ha llevado a enfocarme en el diseño multimedia y el mundo de la programación.
          </p>
          <p>
          Me apasiona trabajar en nuevos retos y el aprendizaje constante, así como, el desarrollo de productos y servicios donde el análisis de las personas, sus relaciones y los sistemas con los que interactúan, brinden experiencias valiosas para los usuarios.
          </p>
          <p>
          En mi tiempo libre me gusta leer ciencia ficción, cocina, aprender idiomas y ver series asiáticas.
          </p>
          <div className="button-container">
          <a className="cv-button" href="https://drive.google.com/open?id=1yYrFJyY3FKjVXF-48hM63I8aKTkPHB6z">Ver CV</a>
          </div>
        </div>
        <div className="aboutImage col-lg-6">
          <img
            src={profile}
            alt="Citlalli_Del_Moral_Profile"
            width="100%"
          />
        </div>
      </div>
    </section>
   );
}

export default About;
