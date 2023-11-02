import React from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

const Main = () => {
  return (
    <main>
      <Header isRegistered={true} />
      <Promo />
      <AboutProject />
      <Techs/>

    </main>
  );
};

export default Main;