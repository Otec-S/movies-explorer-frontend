import React from "react";
import "./Promo.css";
import promoLogo from "../../../images/promoLogo.png";

const Promo = () => {
  return (
    <section className="promo">
      <div>
        <div className="promo__title">Учебный проект студента факультета</div>
        <div className="promo__title"> Веб-разработки.</div>
        <div className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </div>
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
