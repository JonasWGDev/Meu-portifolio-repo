
import React from 'react';

import style from "../css/LandingProj.module.css";
import img from "../img/ImgLandingProj.jpg";

const LandingProjects = () => {
  return (
    <div className={style.container}>
      <img src={img} alt='Imagem ilustrativa'></img>
      <div className={style.divBg}></div>
    </div>
  )
}

export default LandingProjects;
