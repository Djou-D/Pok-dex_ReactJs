import React from "react";
import * as S from "./styled";
import Catcher from "../../context/catcher";

import ImgPerfil from "../../../assets/img/perfil.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { catchPokemons } = React.useContext(Catcher);
  return (
    <S.Container>
      <S.BoasVindas>
        <h1>
          Olá, <b>Ash Ketchum</b>
        </h1>
        <p>
          Bem Vindo!
        </p>
        <Link className="home" to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
      </S.BoasVindas>

      <S.imgPerfil>
        <div>
          <p>{catchPokemons.length}</p>
          <img alt="Imagem do perfil do usuario" src={ImgPerfil}></img>
          <div></div>
        </div>
      </S.imgPerfil>
    </S.Container>
  );
};

export default Header;
