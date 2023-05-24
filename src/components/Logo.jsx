
import React from "react";
import {Link } from "react-router-dom";

import style from "../css/Logo.module.css";
import logo from "../img/Logo.png";

const Logo = (() => {
  return (
    <div>
      <Link to={"/"}>
        <img className={style.logo} src={logo} alt="Logo"></img>
      </Link>
    </div>
  )
})

export default Logo;
