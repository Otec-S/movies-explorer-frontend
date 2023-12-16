import React from "react";
import WelcomeForm from "../WelcomeForm/WelcomeForm";
import { useNavigate } from "react-router-dom";
import * as auth from "../../utils/MainApi";

const Register = ({
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isRegistered,
  handleFormValidation,
  userName,
  email,
  password,
  userId,
  setUserId,
  setPassword,
  setUserName,
  setEmail,
  setIsRegistered,
  errorServerMessage,
  setErrorServerMessage,
}) => {
  const navigate = useNavigate();

  async function handleRegisterFormSubmit(e) {
    e.preventDefault();

    try {
      // if (!userName || !email || !password) {
      //   return;
      // }

      const response = await auth.register(userName, email, password);
      console.log("response", response);




      if (response.ok) {
        const data = await response.json();

        //записываем полученные в ответе сервера пароль и _id в стейты
        // setPassword(data.password);
        setEmail(data.email);
        setUserName(data.name);
        setUserId(data._id);
        //стейт isRegistered в положение true
        setIsRegistered(true);
        //перевод на страницу фильмы
        navigate("/movies", { replace: true });
      } else if (response.status === 409) {
        // Обработка ошибки, если response.ok === false
        console.error(`Server returned an error: ${response.statusText}`);
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
