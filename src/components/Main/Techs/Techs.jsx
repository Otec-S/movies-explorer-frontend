import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__header">Технологии</div>
      <div className="techs__line"></div>

      <div className="techs__description">
        <div className="techs__title">7 технологий</div>
        <div className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </div>
      </div>
      <div className="techs__cards techs__text">
        <div className="techs__card">HTML</div>
        <div className="techs__card">CSS</div>
        <div className="techs__card">JS</div>
        <div className="techs__card">React</div>
        <div className="techs__card">Git</div>
        <div className="techs__card">Express.js</div>
        <div className="techs__card">mongoDB</div>
      </div>
    </section>
  );
};

export default Techs;
