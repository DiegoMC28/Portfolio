import React from "react";
import style from "./HeaderLinks.module.css";

const HeaderLinks = () => {
  return (
    <ul className={style.headerLinks}>
      <li className={style.headerLinksStyle}>
        <a href="./" className={style.headerLink}>
          Principal
        </a>
      </li>
      <li className={style.headerLinksStyle}>
        <a href="./" className={style.headerLink}>
          Sobre mi
        </a>
      </li>
      <li className={style.headerLinksStyle}>
        <a href="./" className={style.headerLink}>
          Proyectos
        </a>
      </li>
      <li className={style.headerLinksStyle}>
        <a href="./" className={style.headerLink}>
          Contacto
        </a>
      </li>
    </ul>
  );
};

export default HeaderLinks;
