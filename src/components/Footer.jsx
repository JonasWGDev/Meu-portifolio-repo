import React from "react";
import {FaMapMarkerAlt, FaLinkedinIn, FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";

import style from "../css/Footer.module.css";
import logo from "../img/Logo.png";

const Footer = () => {

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <a href="#header"><img src={logo} alt="Logo"></img></a>
      </div>

      <div className={style.info}>
        <div className={style.local}>
          <h1><FaMapMarkerAlt />Centro - Capela do Alto, SP</h1>
          <h1>CEP: 18195-000</h1>
        </div>

        <div className={style.links}>
          <Link to={"/"}>Inicio</Link>
          <Link to={"/projetos"}>Projetos</Link>
          <Link to={"/contato"}>Contato</Link>
          <Link to={"/sobre"}>Sobre</Link>
        </div>

        <div className={style.socialIcons}>
          <a href="https://github.com/JonasWGDev" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jonas-wincler-27998a255/" target="_blank"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className={style.rigts}>
        <h1>&copy; 2023 - Jonas Wincler, Todos os direitos reservados</h1>
      </div>
    </div>
  )
}

export default Footer;