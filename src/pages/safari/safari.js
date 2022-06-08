import React, { useState, useEffect } from "react";
import { searchPokemon, getPokemons, getPokemonData } from "../../services/api";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import Search from "../../components/search";
import { CatcherProvider } from "../../components/context/catcher";
import Pokedex from "../../components/pokedex";
import { ContainerNotFound } from "../../components/styles/not-found-styled";

const catcherKey = "catcher";
const Safari = () => {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [pokemons, setPokemons] = useState([]);
  const [catche, setCatche] = useState([]);

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const itensPerPage = 24;

  //listagem de pokémons e paginação
  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promised = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const result = await Promise.all(promised); //resultado recebe a promessa de retorno da API

      setPokemons(result);
      setLoading(false);
      setTotalPage(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("Erro em fetchPokemon: ", error);
    }
  };

  //retornar a capitura do pokémon no localStorage.
  const loadCatchePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(catcherKey)) || [];
    setCatche(pokemons);
  };

  //inicia ao renderizar a pagina
  useEffect(() => {
    loadCatchePokemons();
  }, []);

  //lista os pokémons ao trocar de paginas
  /*eslint-disable*/
  useEffect(() => {
    fetchPokemon();
  }, [page]);

  //metodos para armazenar a capitura do pokémon no localStorage
  const updateCatchPokemons = (name) => {
    const updateCatch = [...catche];
    const catcherIndex = catche.indexOf(name);

    if (catcherIndex >= 0) {
      updateCatch.splice(catcherIndex, 1);
    } else {
      updateCatch.push(name);
    }

    window.localStorage.setItem(catcherKey, JSON.stringify(updateCatch));
    setCatche(updateCatch);
  };

  //metodo que chama a busca de pokémons
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPage(1);
    }

    setLoading(false);
  };

  return (
    
      <CatcherProvider
        value={{
          catchPokemons: catche,
          updateCatchPokemons: updateCatchPokemons,
        }}
      >
        <>
          <Header />
          <Search onSearch={onSearchHandler} />
          {notFound ? (
            <ContainerNotFound>
              <p>Huuum! Esse não passou por aqui!</p>
            </ContainerNotFound>
          ) : (
            <Pokedex
              pokemons={pokemons}
              loading={loading}
              page={page}
              setPage={setPage}
              totalPage={totalPage}
            />
          )}
        </>
        <Footer />
      </CatcherProvider>
    
  );
};

export default Safari;
