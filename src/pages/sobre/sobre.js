import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/pokemon-logo.png";
import Banner from "../../assets/img/banner-pokemon.jpg";
import Logo_React from "../../assets/img/react-icon.png";
import Logo_JS from "../../assets/img/javascript-icon.png";
import Logo_Styled from "../../assets/img/styled-component-icon.png";
import { Container } from "./styled";

const Sobre = () => {
  return (
    <Container>
      {/* Banner */}
      <div className="banner">
        <header>
          <img alt="logo pokémon" src={Logo} />
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/safari">
            Safari
          </Link>
        </header>
        <img
          className="img-banner"
          alt="Banner pokémon, ash e pikachu"
          src={Banner}
        />
        <div className="content">
          <h2>Temos que Pegar</h2>

          <p>
            Esse meu jeito de viver. Ninguém nunca foi igual. A minha vida é
            fazer. O bem vencer o mal. <br /> ... <br />
            Pokémon! Temos que pegar. Isso eu sei. Pegá-los eu tentarei!
            Pokémon!. Juntos teremos que. O mundo defender!
          </p>
        </div>
      </div>

      {/* Sobre o projeto*/}
      <section className="about">
        <section className="about-sect">
          <div className="content-bx">
            <h2 className="heading">Sobre o Projeto</h2>
            <p className="text">
              O Objetivo desse projeto é trazer a experiência do safari pokémon
              para a sua tela, projeto responsivo que traz a possibilidades de
              te levar a diversão cassando Pokémons em qualquer dispositivo.{" "}
              <br /> <br />
              Essa plataforma web divertida foi criada com o objetivo de listar,
              pesquisar e capturar os fantásticos monstrinhos do mundo Pokémon,
              a base desse projeto foi construida em React JS e os dados sobre
              os pokémons foram absorvidos da PokéApi, uma API REST de
              gerenciamento de GETs.
            </p>
          </div>
          <div className="img-bx"></div>
        </section>

        {/* Technology */}
        <section className="technology">
          <h2 className="heading">Tecnologias Usadas</h2>
          <div className="container">
            <div className="tec-bx">
              <div>
                <img alt="Logo ReactJs" src={Logo_React} />
                <h2>React Js</h2>
              </div>
            </div>
            <div className="tec-bx">
              <div>
                <img alt="Logo JavaScript" src={Logo_JS} />
                <h2>JavaScript</h2>
              </div>
            </div>
            <div className="tec-bx">
              <div>
                <img alt="Logo styled-component" src={Logo_Styled} />
                <h2>Styled Component</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Desenvolvedor */}
        <section className="about-sect">
          <div className="img-bx2"></div>
          <div className="content-bx">
            <h2 className="heading">Sobre o Dev</h2>
            <p className="text">
              Eu sou Dionatam Lima, mas estou Djou rsrsr, sou o responsavel por
              desenvolver essa aplicação linda <span><i className="fa fa-heart" aria-hidden="true"></i></span><br /> Essa foi a minha primeira
              experiência com ReactJs e devo dizer que me apoixoinei por essa biblioteca
              e sua comunidade... <br /> Pois bem, eu tenho formação em
              Logística e estou em processo de transição de carreira, aprendendo
              a cada dia. <br /> Estou desbravando esse multiverso insano que é o mundo
              da programação <span><i className="fa fa-rocket" aria-hidden="true"></i>
</span>.
            </p>
          </div>
        </section>

        {/* Footer */}
        <section className="footer">
          <div className="social">
            <div>
              <h3>Linkedin</h3>
              <a href="https://www.linkedin.com/in/dionatam-lima-silva/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/Djou-D" target="_blank" rel="noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <small className="copy">&copy; 2022 Djou-D</small>
        </section>
      </section>
    </Container>
  );
};

export default Sobre;
