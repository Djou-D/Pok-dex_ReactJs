import React from "react";
import * as S from "./styled";

import Pokemon from "../pokemon";
import Pagination from "../pagination";

import PokeLoading from "../../assets/gif/pokebola-pikachu.gif";
import { LoadingPosition } from "../styles/loading-style";

const Pokedex = (props) => {
    const {description, pokemons, loading, page, setPage, totalPage} = props;

    //metodos da paginação para trocar de paginas
    const onLeftClickHandle = () => {
        // console.log("voltar");
        if(page > 0){
            setPage(page - 1);
        }
    }
    //
    const onRightClickHandle = () => {
        // console.log("proximo");
        if(page + 1 !== totalPage) {
            setPage(page + 1);
        }
    }

    return (
        <S.Container>
            <S.Pag>
                <Pagination 
                    page={page + 1}
                    totalPage={totalPage}
                    onLeftClick={onLeftClickHandle}
                    onRightClick={onRightClickHandle}
                />
            </S.Pag>

            {loading ? (
                <LoadingPosition>
                   <img alt="Imagem em movimento Pikachu loading..." src={PokeLoading} />
                </LoadingPosition>
            ) : (
                <S.CardPosition>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (< Pokemon 
                                pokemon={pokemon} 
                                description={description}  
                                key={index} 
                                />)
                    })}
                    
                    
                </S.CardPosition>
            )}
        </S.Container>
    )
}

export default Pokedex;