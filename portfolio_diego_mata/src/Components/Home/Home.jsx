import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.homeContent}>
        <h1 className={style.homeHeader}>¡Hola!, Soy Diego Mata</h1>
        <div className={style.homeInfo}>
          <p className={style.textInfo}>
            Un desarrollador multidisciplinar capaz de realizar tanto el back
            como el front de cualquier tipo de aplicacion conduciendo al éxito
            del producto final
          </p>
        </div>
        <button className={style.proyectsButtom}>Proyectos</button>
      </div>
    </div>
  );
};

export default Home;
