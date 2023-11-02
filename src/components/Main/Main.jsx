import React from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';

const Main = () => {
  return (
    <main>
      <Header isRegistered={true} />
      <Promo />
      <AboutProject />

    </main>
  );
};

export default Main;