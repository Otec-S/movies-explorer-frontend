import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

const Profile = ({ menuActive, setActive, isRegistered, isPromo }) => {
  return (
    <div>
      <Header
        isRegistered={isRegistered}
        menuActive={menuActive}
        setActive={setActive}
        isPromo={isPromo}
      />
    </div>
  );
};

export default Profile;
