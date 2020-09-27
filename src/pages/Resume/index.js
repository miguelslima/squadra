import React from "react";

import { Container, CardInitial } from "./styles";

import gokuKame from "../../assets/gokukame.gif";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";

import PageDefault from "../../components/PageDefault";

function Resume() {
  return (
    <PageDefault>
      <Container>
        <div id="div">
          <div className="bg"></div>

          <CardInitial>
            <img style={{ width: '80vw', height: "20vh" }} src={logo} alt="" />

            <div className="acessar">
              <a href="/planets">Planetas</a>
              <a href="/characters">Personagens</a>

            </div>
          </CardInitial>
        </div>
      </Container>
    </PageDefault>
  );
}

export default Resume;
