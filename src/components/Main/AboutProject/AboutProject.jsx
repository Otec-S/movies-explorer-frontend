import React from "react";
import "./AboutProject.css";
import SubTitle from "../SubTitle/SubTitle";

const AboutProject = () => {
  return (
    <section className="about-project">
      <SubTitle text="О проекте" />
      <article className="about-project__description">
        <div className="about-project__description-block">
          <p className="about-project__description-block-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__description-block-text about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description-block about-project__description-block-padding">
          <p className="about-project__description-block-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__description-block-text about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>

      <div className="about-project__timeline">
        <div className="about-project__timeline-backend about-project__text">
          1 неделя
        </div>
        <div className="about-project__timeline-frontend about-project__text">
          4 недели
        </div>
      </div>

      <div className="about-project__timeline about-project__timeline_explanation">
        <div className="about-project__timeline-backend  about-project__text">
          Back-end
        </div>
        <div className="about-project__timeline-frontend  about-project__text">
          Front-end
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
