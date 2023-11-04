import React from "react";
import "./Techs.css";
import SubTitle from "../SubTitle/SubTitle";

const Techs = () => {
  return (
    <section className="techs">
      <SubTitle text="Технологии" />

      <div className="techs__description">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
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
