import React from "react";
import { Container } from "./styled";

import LogoP from "../../../assets/img/logoPokemon.png"


const Footer = () => {


    return (

        <Container>
            <img alt="logo Pokémon" src={LogoP}/> 
            <small>&copy; 2022 Djou-D</small>
        </Container>
    )
}

export default Footer;