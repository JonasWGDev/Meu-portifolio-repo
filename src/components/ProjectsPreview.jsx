import React from "react";

import style from "../css/ProjectPrev.module.css";
import char2 from "../img/Char2.png";

import ProjFlex from "./ProjFlex";

const ProjectsPreview = () => {
  return (
    <div className={style.container}>
      <h1>Projetos</h1>
      <img src={char2} alt="Imagem ilustrativa"></img>

      <ProjFlex></ProjFlex>
      
    </div>
  )
}

export default ProjectsPreview;
