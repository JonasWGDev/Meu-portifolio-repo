
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import style from "../css/NavBarMobile.module.css";

const NavBarMobile = () => {

  const navbar = useRef(null);

  window.navbarMobi = navbar;

  return (
    <div ref={navbar} style={window.visibleDiv == true ? {height:"200px", transition:"0.5s"}
    : {height:"0px", transition:"0.5s"}} className={style.container}>
      {
        window.visibleDiv == true ?
        <div className={style.contaiLinks}>
          <ul>
            <li><Link to={"/"}>Inicio</Link></li>
            <li><Link to={"/projetos"}>Projetos</Link></li>
            <li><Link to={"/contato"}>Contato</Link></li>
            <li><Link to={"/sobre"}>Sobre</Link></li>
          </ul>
        </div>
        :
        <div></div>
      }
      
    </div>
  )
}

export default NavBarMobile;