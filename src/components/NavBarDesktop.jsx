import React from "react";
import {Link} from "react-router-dom";

import style from "../css/NavBarDesktop.module.css";

const NavBarDesktop = () => {
  return(
    <div className={style.container}>
      <ul>
        <li><Link to={"/"}>Inicio</Link></li>
        <li><Link to={"/projetos"}>Projetos</Link></li>
        <li><Link to={"/contato"}>Contato</Link></li>
        <li><Link to={"/sobre"}>Sobre</Link></li>
      </ul>
    </div>
  )
};

export default NavBarDesktop;