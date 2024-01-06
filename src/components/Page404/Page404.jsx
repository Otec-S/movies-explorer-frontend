import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  
  
  return (
    <main className="page404">
      <div className="page404__number">404</div>
      <div className="page404__not-found">Страница не найдена</div>
      <button className="page404__return-button" onClick={handleGoBack}>
        Назад
      </button>
    </main>
  );
};

export default Page404;
