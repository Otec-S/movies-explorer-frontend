import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project___title">О проекте</div>
      <div className="about-project___line"></div>
      <div className="about-project___description">
        <div className="about-project___description-block">
          <div className="about-project___description-block-title">Дипломный проект включал 5 этапов</div>
          <div className="about-project___description-block-text about-project___text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</div>
        </div>
        <div className="about-project___description-block about-project___description-block-padding">
          <div className="about-project___description-block-title">На выполнение диплома ушло 5 недель</div>
          <div className="about-project___description-block-text about-project___text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</div>
        </div>
      </div>

      <div className="about-project___timeline">
        <div className="about-project___timeline-backend about-project___text">1 неделя</div>
        <div className="about-project___timeline-frontend about-project___text">4 недели</div>
      </div>

      <div className="about-project___timeline about-project___timeline_explanation">
        <div className="about-project___timeline-backend  about-project___text">Back-end</div>
        <div className="about-project___timeline-frontend  about-project___text">Front-end</div>
      </div>
    </section>
  );
};

export default AboutProject;
