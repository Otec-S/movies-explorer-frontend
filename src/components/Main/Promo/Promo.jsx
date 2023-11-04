import React from "react";
import "./Promo.css";
import promoLogo from "../../../images/promoLogo.png";

const Promo = () => {
  return (
    <section className="promo">
      <div>
        <h1 className="promo__title">Учебный проект студента факультета</h1>
        <h1 className="promo__title"> Веб-разработки.</h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button">Узнать больше</button>
      </div>
      <img
        src={promoLogo}
        className="promo__logo"
        alt="Логотип с планетой"
      />
    </section>
  );
};

export default Promo;
