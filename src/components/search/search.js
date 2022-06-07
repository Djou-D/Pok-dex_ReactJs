import React, {useState} from "react";
import { Container } from "./styled";


const Search = (props) => {
    const [search, setSearch] =  useState("ditto");
    const {onSearch} = props;

    //metod que encher o click da tecla no input para buscar o pokémon
    const onChangeHandle = (event) => {
        // console.log("Tecla: ", event.target.value);
        setSearch(event.target.value);
        if(event.target.value.length === 0) {
            onSearch(undefined); // se o input ficar vazio retorna a lista de pokémons
        }
    }

    //metodo para pegar o pokémon indicado no input de busca
    const onButtonClickHandle = () => {
        // console.log("pokémon: ", search);
        onSearch(search);
    }

    const searcher = document.querySelector('.search');

    return (
        <Container>
            
                <div className="search">
                    <div className="icon" onClick={() => {
                        searcher.classList.toggle('active');
                    }}></div>
                    <div className="input">
                        <input id="mysearch" placeholder="Procurar no Safari!!" onChange={onChangeHandle} />
                    </div>
                    <span className="catch"onClick={onButtonClickHandle} ></span>
                </div>
        
        </Container>
    )
}

export default Search;