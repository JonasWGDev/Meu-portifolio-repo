
import {Link} from "react-router-dom";

import style from "../css/Landing.module.css";
import foto from "../img/foto.jpg";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.opacity}></div>
      <div className={style.aboutMe}>
        <h1>Sobre Mim</h1>
        <p>
          Olá meu nome é Jonas Wincler tenho 17 anos, atualmente sou Desenvolvedor Web com foco no <strong>Front-End </strong>
          tambem já estudei Desenvolvimento de Jogos com <strong>Godot Game Engine</strong> na qual a linguagem de programação
          é a <strong>Gdscript</strong> que é similar a <strong>Python</strong>, tenho conhecimento intermediário em <strong>Flat Design </strong>
          e <strong>Pixel Art</strong> e sou um práticante de <strong>Taekwondo</strong>, este é meu portifólio onde você podera ver meus projetos.
        </p>
        <div className={style.contaiLink}>
          <Link to={"/contato"}>Entre em contato</Link>
        </div>
      </div>

      <div className={style.foto}>
        <img src={foto} alt="Foto do dono do portifólio"></img>
      </div>
    </div>
  )
}

export default Landing;
