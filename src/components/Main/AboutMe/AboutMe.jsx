import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import profilePhoto from "../../../images/profilePhoto.jpg";
import aboutMeArrow from "../../../images/aboutMeArrow.svg";

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
          <Link
            className="about-me__text about-me__github-link"
            to="https://github.com/Otec-S"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <img src={profilePhoto} className="about-me__photo" alt="Фото Сергея" />
      </div>

      <div className="about-me__portfolio">
        <div className="about-me__text about-me__portfolio-title">
          Портфолио
        </div>

        <div className="about-me__portfolio-site">
          <div className="about-me__text about-me__portfolio-site_name">
            Статичный сайт
          </div>

          <Link to="https://otec-s.github.io/russian-travel" target="_blank">
            <img
              src={aboutMeArrow}
              alt="Указатель на сайт"
              className="about-me__portfolio-site_link"
            />
          </Link>
        </div>

        <div className="about-me__line about-me__line_lightgrey" />

        <div className="about-me__portfolio-site">
          <div className="about-me__text about-me__portfolio-site_name">
            Адаптивный сайт
          </div>

          <Link to="https://www.adviser-spb.ru/" target="_blank">
            <img
              src={aboutMeArrow}
              alt="Указатель на сайт"
              className="about-me__portfolio-site_link"
            />
          </Link>
        </div>

        <div className="about-me__line about-me__line_lightgrey" />

        <div className="about-me__portfolio-site">
          <div className="about-me__text about-me__portfolio-site_name">
            Одностраничное приложение
          </div>

          <Link to="https://otec-s.students.nomoredomainsrocks.ru" target="_blank">
            <img
              src={aboutMeArrow}
              alt="Указатель на сайт"
              className="about-me__portfolio-site_link"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
