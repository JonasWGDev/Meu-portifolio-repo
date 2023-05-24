
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import style from "../css/About.module.css";
import foto from "../img/foto.jpg";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutMe}>
        <h1>Sobre Mim</h1>
        <p>
          Olá meu nome é Jonas Wincler tenho 17 anos, atualmente sou Desenvolvedor Web com foco no 
          <strong> Front-End </strong>
          tambem já estudei Desenvolvimento de Jogos com <strong>Godot Game Engine </strong> na qual
          a linguagem de programação
          é a <strong> Gdscript </strong> que é similar a <strong> Python </strong>, tenho conhecimento
          intermediário em <strong>Flat Design </strong>
          e <strong>Pixel Art </strong> e sou um práticante de <strong>Taekwondo </strong>.
          <br></br><br></br>
          Comecei no mundo da programação em uma <strong>Quinta-Feira (21/03/2021) </strong>
          no primeiro contato com desenvolvimento de jogos com uma game engine chamada
          <strong> Construct </strong> , <strong>Gdevelop </strong> que são game engines
          <strong> no-code/low-code </strong> (sem ter contato direto com a programação)
          que na maioria os metodos de programação são por blocos de codigo pre prontos,
          o meu primeiro contato com programação foi com a linguagem <strong>java </strong> mas não me familiarizei
          e depois de um tempo achei a <strong>Godot game engine </strong> que na qual adorei e uso
          ela ate hoje.
          <br></br><br></br>
          Conheci o <strong>Front-end</strong> em um <strong>sabado (04/06/2022)</strong> e me apaixonei por ele desde então escolhi
          ficar nessa area estou estudando cada vez mais para me tornar um profissional.

          me siga no <strong>linkedin</strong>, <strong>github</strong> e acompanhe meu <strong>portifolio</strong> para ver minhas evoluções na forma
          de projetos que estarei adicionando.

          se quiser entrar em contato comigo para alguma informação, convite, oferta ou qualquer outra
          coisa clique no botão abaixo e me mande um email assim que possivel estarei respondendo.
        </p>
        <div className={style.containerBtn}>
          <div className={style.contaiLink}>
            <Link to={"/contato"}>Entre em contato</Link>
          </div>

          <div className={style.socialDev}>
            <a href="https://github.com/JonasWGDev" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jonas-wincler-27998a255/" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className={style.foto}>
        <img src={foto} alt="Foto do dono do portifólio"></img>
      </div>
    </div>
  )
}

export default About;