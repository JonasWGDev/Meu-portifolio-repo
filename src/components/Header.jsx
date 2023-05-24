import { useRef, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

import Logo from "./Logo";
import style from "../css/Header.module.css";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";


const Header = () => {

  const btnSide = useRef(null);

  const [isvisibleDiv, setIsVisibleDiv] = useState(false);
  window.btnSideBar = btnSide;

  window.visibleDiv = isvisibleDiv;

  const btnShowDiv = () => {
    setIsVisibleDiv(!isvisibleDiv);
  }

  return(
    <div id="header" className={style.contaiHeader}>
      <Logo />
      <NavBarDesktop />
      <div ref={btnSide} onClick={btnShowDiv} className={style.sideBtn}>
        <a><FaAlignJustify /></a>
      </div>
      <NavBarMobile />
    </div>
  )
};

export default Header;