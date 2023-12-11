import React from "react";
import WelcomeForm from "../WelcomeForm/WelcomeForm";

const Register = ({
  userName,
  email,
  password,
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
      userName={userName}
      email={email}
      password={password}
      isNameValid={isNameValid}
      isEmailValid={isEmailValid}
      isPasswordValid={isPasswordValid}
      handleFormValidation={handleFormValidation}
    />
  );
};

export default Register;
