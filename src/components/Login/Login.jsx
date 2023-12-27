import React from "react";
import WelcomeForm from "../WelcomeForm/WelcomeForm";
import { useNavigate } from "react-router-dom";
import * as auth from "../../utils/MainApi";

export default function Login({
  isNameValid,
  isEmailValid,
  isPasswordValid,
  handleFormValidation,
  email,
  password,
  setUserId,
  setPassword,
  setUserName,
  setEmail,
  setIsRegistered,
  errorServerMessage,
  setErrorServerMessage,
}) {
  const navigate = useNavigate();

  async function handleLoginFormSubmit(e) {
    e.preventDefault();

    try {
      //получение ответа с сервера
      const response = await auth.authorize(email, password);

      if (response.ok) {
        //получение и запись в data данных с сервера
        const data = await response.json();

        //записываем полученные в ответе сервера пароль и _id в стейты
        setPassword(data.password);
        setEmail(data.email);
        setUserName(data.name);
        setUserId(data._id);
        //стейт isRegistered в положение true

        setIsRegistered(true);
        //перевод на страницу фильмы
        navigate("/movies", { replace: true });
      } else if (response.status === 401) {
        // Обработка ошибки, если response.ok === false
        console.error(`Server returned an error: ${response.statusText}`);
        setErrorServerMessage("Вы ввели неправильный логин или пароль.");
      } else {
        setErrorServerMessage("При авторизации произошла ошибка.");
      }
    } catch (error) {
      console.error("error:", error);
    }
  }

  return (
    <WelcomeForm
      greetings="Рады видеть!"
      isNewUser={false}
      buttonText="Войти"
      welcomeQuestion="Ещё не зарегистрированы?"
      welcomeLinkName="Регистрация"
      welcomeLink="/signup"
      isNameValid={isNameValid}
      isEmailValid={isEmailValid}
      isPasswordValid={isPasswordValid}
      handleFormValidation={handleFormValidation}
      handleLoginFormSubmit={handleLoginFormSubmit}
      errorServerMessage={errorServerMessage}
    />
  );
}
