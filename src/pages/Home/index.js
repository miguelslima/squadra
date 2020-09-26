import React from "react";

import { Container, CardInitial } from "./styles";

import gokuKame from "../../assets/gokukame.gif";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";

import PageDefault from "../../components/PageDefault";

function Home() {
  const history = useHistory();

  function carregar() {
    document.getElementById("entrar").style.display = "block";
  }

  return (
    <Container
      onLoad={setTimeout(() => {
        carregar();
      }, 2100)}
    >
      <div id="div">
        <div className="bg"></div>

        <CardInitial>
          <img style={{ width: '80vw', height: "20vh" }} src={logo} alt="" />

          <div className="acessar">
            <img src={gokuKame} />
            <a
              href="/resume"
              id="entrar"
              style={{
                color: "#f90",
                fontFamily: "Arial",
                fontStyle: "italic",
                display: "none",
              }}
            >
              Acessar a home
            </a>
          </div>
        </CardInitial>
      </div>
    </Container>
  );
}

export default Home;
