import React from "react";
import "./AboutMe.css";
import profilePhoto from "../../../images/profilePhoto.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__text about-me__header">Студент</div>
      <div className="about-me__line" />

      <div className="about-me__info">
        <div className="about-me__description">
          <div className="about-me__text about-me__name">Сергей</div>
          <div className="about-me__text about-me__personal-info">
            Фронтенд-разработчик, 46 лет
          </div>
          <div className="about-me__text about-me__biography">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue
            leo, condimentum ut congue quis, consequat quis mi. Quisque pretium
            vehicula quam quis scelerisque. Nunc condimentum condimentum
            aliquet. Aliquam erat volutpat. Sed laoreet sapien nec magna
            volutpat vehicula. Vestibulum aliquet tortor quis vehicula
            ullamcorper.
          </div>

          <button className="about-me__text about-me__github-link">
            GitHub
          </button>
        </div>
        <img
          src={profilePhoto}
          className="about-me__photo"
          alt="Фото Сергея"
        />
      </div>
    </section>
  );
};

export default AboutMe;
