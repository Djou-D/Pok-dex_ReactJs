import React from "react";

const Catcher = React.createContext({
    catchPokemons: [],
    updateCatchPokemons: (id) => null
});

export const CatcherProvider = Catcher.Provider;
export default Catcher;