
import React from 'react';
import Proj from "../components/Proj";

import imgAnaModel from "../img/projects/ana-bella-modelo.png";
import imgLandingPg1 from "../img/projects/landing-page-1.png";

import style from "../css/ProjList.module.css";

const ProjList = () => {

  return (
    <div className={style.container}>
      
      <ul className={style.rowFlex}>
        <div className={style.item}>
          <Proj
          img={imgAnaModel}
          title={"Anna Bella - Modelo"}
          linkRepo={"https://github.com/JonasWGDev/anna-bella-modelo"}
          targetRepo={"_blank"}
          hiddenPrev={true}
          width={"50%"}
          minWidth={"300px"}
          maxWidth={"400px"}
          bgColor={"#4DAB94"}
          pd={"10px"}
          class={"md"}
          />
        </div>

        <div className={style.item}>
          <Proj 
            img={imgLandingPg1}
            title={"Landing Page Files"}
            linkRepo={"https://github.com/JonasWGDev/LandingPage"}
            linkPrev={"https://jonaswgdev.github.io/LandingPage/"}
            targetRepo={"_blank"}
            targetPrev={"_blank"}
            hiddenPrev={false}
            width={"50%"}
            minWidth={"320px"}
            maxWidth={"500px"}
            bgColor={"#3fa751"}
            mg={"0 20px"}
            pd={"10px"}
            class={"lg"}
          />
        </div>
      </ul>
    </div>
  )
}

export default ProjList;
