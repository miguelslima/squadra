import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
