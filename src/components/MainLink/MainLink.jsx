import React from "react";
import "./MainLink.css";
import logoSmile from "../../images/logoSmile.svg";
import { Link } from "react-router-dom";

const MainLink = () => {
  return (
    <Link to="/">
      <img
        src={logoSmile}
        className="header__logoSmile"
        alt="Логотип с улыбкой"
      />
    </Link>
  );
};

export default MainLink;
