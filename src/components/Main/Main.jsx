import React, { useRef } from "react";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = ({ menuActive, setActive, isRegistered, isPromo }) => {
  const aboutProjectRef = useRef(null);

  const handleScrollToAboutProject = () => {
    if (aboutProjectRef.current) {
      aboutProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        menuActive={menuActive}
        setActive={setActive}
        isRegistered={isRegistered}
        isPromo={isPromo}
      />
      <main>
        <Promo onButtonClick={handleScrollToAboutProject} />
        <AboutProject refProp={aboutProjectRef} />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};

export default Main;
