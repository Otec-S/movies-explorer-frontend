import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import profilePhoto from "../../../images/profilePhoto.jpg";
import aboutMeArrow from "../../../images/aboutMeArrow.svg";
import SubTitle from "../SubTitle/SubTitle";

const AboutMe = () => {
  return (
    <section className="about-me">
      <SubTitle text="Студент" />

      <div className="about-me__info">
        <div className="about-me__description">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__text about-me__personal-info">
            Фронтенд-разработчик, 46 лет
          </p>
          <p className="about-me__biography">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum vel itaque earum voluptatibus praesentium! Harum sapiente nemo officiis rerum in facere, veritatis alias eius sed minus quisquam provident mollitia explicabo reprehenderit adipisci maxime expedita optio quos ipsam porro nam at! Quia, fugit. Nostrum beatae, ex impedit quidem, dignissimos ab quos inventore cupiditate consectetur eius fugiat! Dicta maxime quasi sint magni nostrum animi laborum assumenda nihil incidunt. Error cupiditate facere, sed quia earum nemo unde eaque. At labore officiis fuga quasi? Corporis earum vel fugiat ducimus magni cum voluptatem! Assumenda quaerat veniam ab inventore. Reprehenderit pariatur est porro quia aspernatur labore.
          </p>
          <Link
            className="about-me__github-link"
            to="https://github.com/Otec-S"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <img src={profilePhoto} className="about-me__photo" alt="Фото Сергея" />
      </div>

      <div className="about-me__portfolio">
        <h3 className="about-me__portfolio-title">Портфолио</h3>

        <div className="about-me__portfolio-site">
          <p className="about-me__portfolio-site_name">Статичный сайт</p>

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
          <p className="about-me__portfolio-site_name">Адаптивный сайт</p>

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
          <p className="about-me__portfolio-site_name">
            Одностраничное приложение
          </p>

          <Link
            to="https://otec-s.students.nomoredomainsrocks.ru"
            target="_blank"
          >
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
