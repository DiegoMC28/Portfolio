import React from "react";
import style from "./HeaderLogoContent.module.css";
import profileImage from "../../Images/DiegoMata.jpg";

const HeaderLogoContent = () => {
  return (
    <div className={style.headerLogoContent}>
      <img className={style.profileImage} src={profileImage} />
      <span className={style.profileImageName}>Diego Mata</span>
    </div>
  );
};

export default HeaderLogoContent;
