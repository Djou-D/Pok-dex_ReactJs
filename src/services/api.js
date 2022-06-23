
//metodo assíncrono para buscar um pokémon
export const searchPokemon = async (pokemon) => {
    try
    {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url); //fetch permite a busca assíncrona pela API
        return await response.json();
    }
    catch (error)
    {
        console.log("O erro foi: ", error);
    }
}

//metodo assíncrono que lista um limit de pokémons para manipular a paginação
export const getPokemons = async (limit = 24, offset = 0) => {
    try
    {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        return response.json();
    }
    catch (error)
    {
        console.log("O erro foi: ", error);
    }
}

//metodo assíncrono que lista os pokémons e permite o acesso aos seus atributos
export const getPokemonData = async (url) => {
    try
    {
        const response = await fetch(url);
        return response.json();
    }
    catch (error)
    {
        console.log("O erro foi: ", error);
    }
}

export const getDescription = async (pokemon) => {
    try
    {
        let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
        const response = await fetch(url);
       
        return response.json();
    }
    catch (error)
    {
        console.log("Erro do getDescription: " + error);
    }
}

export const getDescriptionData = async (url) => {
    try
    {
        const response = await fetch(url);
        return response.json();
    }
    catch (error)
    {
        console.log("O erro foi: ", error);
    }
}