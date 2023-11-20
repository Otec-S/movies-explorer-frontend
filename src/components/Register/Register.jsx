import React from "react";
import "./Register.css";
import WelcomeForm from "../WelcomeForm/WelcomeForm";

const Register = () => {
  return (
    <WelcomeForm
      greetings="Добро пожаловать!"
      isNewUser={true}
      buttonText="Зарегистрироваться"
      welcomeQuestion="Уже зарегистрированы?"
      welcomeLinkName="Войти"
      welcomeLink="/signin"
    />
  );
};

export default Register;
