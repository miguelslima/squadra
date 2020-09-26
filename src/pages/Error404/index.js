import React from "react";
import PageDefault from "../../components/PageDefault";

import error from "../../assets/404.gif";

import { Container } from "./styles";

function Error404() {
  return (
    <PageDefault>
      <Container>
        <h1>Página não encontrada!</h1>
        <h3>Escolha uma rota válida!</h3>
        <img src={error} alt="Animação Goku" />
      </Container>
    </PageDefault>
  );
}

export default Error404;
