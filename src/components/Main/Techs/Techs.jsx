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
      <ul className="techs__cards techs__text">
        <li className="techs__card">HTML</li>
        <li className="techs__card">CSS</li>
        <li className="techs__card">JS</li>
        <li className="techs__card">React</li>
        <li className="techs__card">Git</li>
        <li className="techs__card">Express.js</li>
        <li className="techs__card">mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
