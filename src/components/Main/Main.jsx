import React from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';

const Main = () => {
  return (
    <main>
      <Header isRegistered={true} />
      <Promo />

    </main>
  );
};

export default Main;