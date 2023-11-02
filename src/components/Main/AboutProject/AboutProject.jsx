import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__title">О проекте</div>
      <div className="about-project__line"></div>
      <div className="about-project__description">
        <div className="about-project__description-block">
          <div className="about-project__description-block-title">Дипломный проект включал 5 этапов</div>
          <div className="about-project__description-block-text about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</div>
        </div>
        <div className="about-project__description-block about-project__description-block-padding">
          <div className="about-project__description-block-title">На выполнение диплома ушло 5 недель</div>
          <div className="about-project__description-block-text about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</div>
        </div>
      </div>

      <div className="about-project__timeline">
        <div className="about-project__timeline-backend about-project__text">1 неделя</div>
        <div className="about-project__timeline-frontend about-project__text">4 недели</div>
      </div>

      <div className="about-project__timeline about-project__timeline_explanation">
        <div className="about-project__timeline-backend  about-project__text">Back-end</div>
        <div className="about-project__timeline-frontend  about-project__text">Front-end</div>
      </div>
    </section>
  );
};

export default AboutProject;
