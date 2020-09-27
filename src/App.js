import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <HashRouter basename="squadra">
      <GlobalStyle />
      <Routes />
    </HashRouter>
  );
}

export default App;
