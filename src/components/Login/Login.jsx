import React, { useState } from "react";
import WelcomeForm from "../WelcomeForm/WelcomeForm";
import { useNavigate } from "react-router-dom";
import * as auth from "../../utils/MainApi";

export default function Login({
  isNameValid,
  isEmailValid,
  isPasswordValid,
  handleFormValidation,
}) {
  //стейт для формы логирования
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!formValue.email || !formValue.password) {
        return;
      }

      const data = await auth.authorize(formValue.email, formValue.password);

      if (data.token) {
        setFormValue({ email: "", password: "" });
        // Используем колбэк для гарантии актуальности данных
        setFormValue(() => {
          navigate("/", { replace: true });
        });
      }
    } catch (error) {
      console.error(error);
      // Обработка ошибок, например, уведомление пользователя
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
    />
  );
}
