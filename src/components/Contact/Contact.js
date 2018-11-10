import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container text-right">
          <h2>Contacto</h2>
          <hr align="right"/>
          <p className="contact-text offset-md-6">¿Buscas una desarrolladora? ¿Tienes comentarios o preguntas? Estaría feliz de saber de ti cualquiera que sea la razón</p>
          <p className="icons">
            <a href="mailto:citlallidmg@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="https://github.com/CitlalliDMG" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/citlallidmg/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.behance.net/CitlalliDMG" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance-square"></i>
            </a>
          </p>
      </div>
    </section>
  );
}

export default Contact;
