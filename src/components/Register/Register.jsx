import React from "react";
import WelcomeForm from "../WelcomeForm/WelcomeForm";

const Register = ({
  isNameValid,
  isEmailValid,
  isPasswordValid,
  handleFormValidation,
}) => {
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
    />
  );
};

export default Register;
