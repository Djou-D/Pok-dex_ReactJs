import React from "react";
import { Link } from "react-router-dom";
import LogoP from "../../assets/img/pokemon-logo-1.png";
import AshP from "../../assets/img/Ash-Pokemon.png";
import PikaP from "../../assets/img/pikachu.png";
import pokebola from '../../assets/svg/pokebola.svg';
import * as S from "./styled";
import { Container } from "../../components/styles/btn-home-styled";

const Home = () => {

 return (
     <S.Container>
     <S.Header>
         <div>
             <img alt="Logo do Pokémon" src={LogoP}/>
         </div>
         <div>
         <Link className="safari" to="/safari">Safari</Link>
         </div>
         <div>
         <Link className="safari" to="/safari">Sobre</Link>
         </div>
     </S.Header>

    <S.Section>
        <section>
            <h2>
                Venha para a caçada, e desbrave o <b data-text="safari">safari</b> Pokémon
            </h2>
            <p>Temos que pegar</p>
            <Container>
                <div><Link className="Gocatch" to="/safari">Vamos Pegar?</Link></div>
            </Container>
        </section>
        <section>
            <img alt="Pikachu" src={PikaP}/>
            <img alt="Ash de Pokémon em pé" src={AshP}/>
            <S.Pokebola src={pokebola} className="pokebola" alt="pokébola" />
        </section>
    </S.Section>

     </S.Container>
 )   
}

export default Home;