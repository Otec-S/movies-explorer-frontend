import React from 'react';
import "./Page404.css";

const Page404 = () => {
  return (
    <main className='page404'>
      <div className="page404__number">404</div>
      <div className="page404__not-found">Страница не найдена</div>
      <button className="page404__return-button">Назад</button>
    </main>
  );
};

export default Page404;