
import {useRef} from 'react';

import style from "../css/Proj.module.css";

const Proj = (props) => {

  const projRef = useRef(null);
  var styMdLg = {
    width:props.width,
    minWidth:props.minWidth,
    maxWidth:props.maxWidth,
    backgroundColor:props.bgColor,
    padding:props.pd,
    margin:props.mg,
    aspectRatio:props.aspRatio
  }

  return (
    <div className={style.container}>
      <li ref={projRef} style={{...styMdLg, ...props.style}}>
        <img src={props.img} alt='Imagem do projeto'></img>
        <div className={style.containerInfo}>
          <h1>{props.title}</h1>
          <a target={props.targetPrev} href={props.linkPrev} hidden={props.hiddenPrev}>Ver o site</a>
          <a target={props.targetRepo} href={props.linkRepo} hidden={props.hiddenRepo}>Ver repositorio</a>
        </div>
      </li>
    </div>
  )
}

export default Proj;
