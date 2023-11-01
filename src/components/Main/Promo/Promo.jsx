import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__block">
        <div className="promo__title">Учебный проект студента факультета</div>
        <div className="promo__title"> Веб-разработки.</div>
        <div className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</div>
        <button className="promo__button">Узнать больше</button>
      </div>
      <div className="promo__logo"></div>
    </section>
  );
};

export default Promo;
