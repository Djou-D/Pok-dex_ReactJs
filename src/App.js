import React from "react";
import { ThemeProvider } from "styled-components";
import variables from "./components/styles/themes/variables";

import GlobalStyle from "./global/globals-styled";
import Routes from "./Routes";

function App() {

  return (
    <ThemeProvider theme={variables}>
      <Routes />    
      <GlobalStyle />
    </ThemeProvider>
     
  );
}

export default App;
