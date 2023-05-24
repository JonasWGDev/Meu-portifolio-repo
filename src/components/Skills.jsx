
import {FaHtml5, FaCss3Alt, FaJsSquare, FaCode, FaCircle} from "react-icons/fa";

import style from "../css/Skills.module.css";
import char1 from "../img/Character1.png";

const Skills = () => {

  const iconMd = {
    fontSize: "110px",
    color: "#ccc"
  }

  const styleIcon = {
    fontSize: "90px",
    color: "#ccc",
    margin: "20px"
  }

  const styCircle = {
    fontSize: "10px",
    marginRight: "10px"
  }

  const pdTitle = {
    marginRight: "10px"
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}><FaCode style={pdTitle} /> Habilidades</h1>
      <div className={style.ContaiSkills}>
        <div className={style.item}>
          <FaHtml5 style={styleIcon} />
          <h1>HTML5</h1>
          <h1>BOOTSTRAP - EM BREVE</h1>
        </div>

        <div className={style.item}>
          <FaCss3Alt style={iconMd} />
          <h1>CSS3</h1>
          <h1>SASS</h1>
          <h1>MEDIA QUARY</h1>
          <h1>DESIGN RESPONSIVO</h1>
        </div>

        <div className={style.item}>
          <FaJsSquare style={styleIcon} />
          <h1>JAVASCRIPT</h1>
          <h1>REACT JS</h1>
          <h1>JQUARY - APRENDENDO</h1>
        </div>
      </div>

      <div className={style.softSkills}>
        <img src={char1} alt="Imagem ilustrativa"></img>
        <div className={style.contaiSoft}>
          <h1><FaCircle style={styCircle} />Trabalho em equipe</h1>
          <h1><FaCircle style={styCircle} />Organizado</h1>
          <h1><FaCircle style={styCircle} />Aprende rapido</h1>
          <h1><FaCircle style={styCircle} />Responsavel</h1>
          <h1><FaCircle style={styCircle} />Sempre aprendendo novas habilidades/tecnologias</h1>
        </div>
      </div>
    </div>
  )
}

export default Skills;
