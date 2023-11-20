import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import LineGrey from "../LineGrey/LineGrey";

const Profile = ({ menuActive, setActive, isRegistered, isPromo }) => {
  return (
    <>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
      <main className="profile">
        <h1 className="profile__greetings">Привет, Виталий!</h1>
        <form action="" className="profile__form">
          <label for="" className="profile__form__label">
            Имя
            <input
              type="text"
              className="profile__form__input"
              value="Виталий"
            />
          </label>
          <div className="profile__form__linegrey">
            <LineGrey />
          </div>

          <label for="" className="profile__form__label">
            E-mail
            <input
              type="text"
              className="profile__form__input"
              value="pochta@yandex.ru"
            />
          </label>
        </form>
        <button type="submit" className="profile__update-btn">Редактировать</button>
        <button className="profile__logout-btn">Выйти из аккаунта</button>
      </main>
    </>
  );
};

export default Profile;
