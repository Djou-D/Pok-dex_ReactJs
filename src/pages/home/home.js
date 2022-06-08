import React from "react";
import { Link } from "react-router-dom";
import LogoP from "../../assets/img/pokemon-logo-1.png";
import AshP from "../../assets/img/Ash-Pokemon.png";
import PikaP from "../../assets/img/pikachu.png";
import * as S from "./styled";
import { Container } from "../../components/styles/btn-home-styled";

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <div>
          <img alt="Logo do Pokémon" src={LogoP} />
        </div>
        <div>
          <Link className="safari" to="/safari">
            Safari
          </Link>
        </div>
        <div>
          <Link className="safari" to="/sobre">
            Sobre
          </Link>
        </div>
      </S.Header>

      <S.Section>
        <section>
          <h2>
            Venha para a caçada, e desbrave o <b data-text="safari">safari</b>{" "}
            Pokémon
          </h2>
          <p>Temos que pegar</p>
          <div className="btn">
          <Container>
            <div>
              <Link className="Gocatch" to="/safari">
                Vamos Pegar?
              </Link>
            </div>
          </Container>
          </div>
        </section>
        <section className="image">
          <img alt="Pikachu" src={PikaP} />
          <img alt="Ash de Pokémon em pé" src={AshP} />
        </section>
      </S.Section>
    </S.Container>
  );
};

export default Home;
