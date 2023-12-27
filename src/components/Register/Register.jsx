import React from "react";
import WelcomeForm from "../WelcomeForm/WelcomeForm";
import { useNavigate } from "react-router-dom";
import * as auth from "../../utils/MainApi";

const Register = ({
  isNameValid,
  isEmailValid,
  isPasswordValid,
  handleFormValidation,
  userName,
  email,
  password,
  setUserId,
  setUserName,
  setEmail,
  setIsRegistered,
  errorServerMessage,
  setErrorServerMessage,
}) => {
  const navigate = useNavigate();

  async function handleRegisterFormSubmit(e) {
    //запрещаем перезагрузку страницы
    e.preventDefault();

    try {
      //асинхронно получаем ответ на регистрацию с сервера
      const registerResponse = await auth.register(userName, email, password);

      //если статус ответа ok
      if (registerResponse.ok) {
        //авторизация
        try {
          //асинхронно получаем ответ на авторизацию с сервера
          const authResponse = await auth.authorize(email, password);

          if (authResponse.ok) {
            //получение и запись в data данных с сервера
            const data = await authResponse.json();
            //записываем полученные в ответе сервера пароль и _id в стейты
            setEmail(data.email);
            setUserName(data.name);
            setUserId(data._id);
            //стейт isRegistered в положение true

            setIsRegistered(true);
            //перевод на страницу фильмы
            navigate("/movies", { replace: true });
          } else if (authResponse.status === 401) {
            // Обработка ошибки, если response.ok === false
            console.error(
              `Server returned an error: ${authResponse.statusText}`
            );
            setErrorServerMessage("Вы ввели неправильный логин или пароль.");
          } else {
            setErrorServerMessage("При авторизации произошла ошибка.");
          }
        } catch (error) {
          console.error("error:", error);
        }
      } else if (registerResponse.status === 409) {
        // Обработка ошибки, если response.ok === false
        console.error(
          `Server returned an error: ${registerResponse.statusText}`
        );
        setErrorServerMessage("Пользователь с таким email уже существует.");
      } else {
        setErrorServerMessage("При регистрации пользователя произошла ошибка.");
      }
    } catch (error) {
      console.error("error:", error);
    }
  }

  return (
    <WelcomeForm
      greetings="Добро пожаловать!"
      isNewUser={true}
      buttonText="Зарегистрироваться"
      welcomeQuestion="Уже зарегистрированы?"
      welcomeLinkName="Войти"
      welcomeLink="/signin"
      isNameValid={isNameValid}
      isEmailValid={isEmailValid}
      isPasswordValid={isPasswordValid}
      handleFormValidation={handleFormValidation}
      handleRegisterFormSubmit={handleRegisterFormSubmit}
      errorServerMessage={errorServerMessage}
    />
  );
};

export default Register;
