import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="container" id="skills">
      <span id="skills-anchor" className="fix-nav-height"> &nbsp; </span>
      <h2>Conocimientos y habilidades</h2>
      <hr align="left"/>
      <div className="row">
        <div className="col-md-3 card ml-md-3">
          <p className="skills-title">Front-End</p>
          <i className="fas fa-laptop-code"></i>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6)</li>
            <li>Node.js</li>
            <li>Firebase</li>
            <li>React</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
        <div className="col-md-3 offset-md-1 card">
          <p className="skills-title">Diseño</p>
          <i className="fas fa-pencil-ruler"></i>
          <ul>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Photoshop</li>
            <li>Adobe XD</li>
            <li>Balsamiq Mockups</li>
            <li>Marvel</li>
          </ul>
        </div>
        <div className="col-md-3 offset-md-1 card">
          <p className="skills-title">Soft skills</p>
          <i className="far fa-lightbulb"></i>
          <ul>
            <li>Metodología ágil</li>
            <li>Autoaprendizaje</li>
            <li>Proactividad</li>
            <li>Trabajo en equipo</li>
            <li>Adaptabilidad</li>
            <li>Empatía</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
