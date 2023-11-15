import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text footer__text-yandex">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <div className="footer__line" />
      
      <div className="footer__lowest-block">
        <p className="footer__text footer__lowest-block__year">© 2023</p>
        <div className="footer__lowest-block__about-yandex">
          <p className="footer__text footer__lowest-block__about-yandex-text">
            Яндекс.Практикум
          </p>

          <Link
            className="footer__text footer__lowest-block__about-yandex-githublink"
            to=""
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
