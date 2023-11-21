import React from "react";
import WelcomeForm from "../WelcomeForm/WelcomeForm";

const Login = () => {
  return (
    <WelcomeForm
      greetings="Рады видеть!"
      isNewUser={false}
      buttonText="Войти"
      welcomeQuestion="Ещё не зарегистрированы?"
      welcomeLinkName="Регистрация"
      welcomeLink="/signup"
    />
  );
};

export default Login;
