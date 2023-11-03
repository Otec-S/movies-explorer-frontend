import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__header">Студент</div>
      <div className="about-me__line" />

      <div className="about-me__info">
        <div className="about-me__description">
          <div className="about-me__name">Сергей</div>
          <div className="about-me__personal-info">Фронтенд-разработчик, 46 лет</div>
          <div className="about-me__biography">!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
          <button className="about-me__github-link">GitHub</button>
        </div>
        <div className="about-me__photo"></div>
      </div>
    </section>
  );
};

export default AboutMe;
