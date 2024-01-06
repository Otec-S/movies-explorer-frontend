import React from "react";
import "./Promo.css";
import promoLogo from "../../../images/promoLogo.png";

const Promo = ({ onButtonClick }) => {
  return (
    <section className="promo">
      <div className="promo__block">
        <h1 className="promo__title">
          {" "}
          Учебный проект студента факультета&ensp;
          <span className="promo__title_nowrap">Веб-разработки.</span>
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button" onClick={onButtonClick}>
          Узнать больше
        </button>
      </div>
      <img src={promoLogo} className="promo__logo" alt="Логотип с планетой" />
    </section>
  );
};

export default Promo;
