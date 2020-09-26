import React from "react";

import { Container, CardInitial } from "./styles";

import gokuKame from "../../assets/gokukame.gif";
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo.png';

function Home() {
  const history = useHistory();

  function carregar() {
    document.getElementById("entrar").style.display = "block";
  }

  function toggleHome() {}
  return (
    <Container
      onLoad={setTimeout(() => {
        carregar();
      }, 2500)}
    >
      <div id="div">
        <div className="bg"></div>

        <CardInitial>
          <img style={{width: 500, height: 300}} src={logo} alt=""/>

          <div className="acessar">
            <img style={{ width: 350, height: 350 }} src={gokuKame} />
            <a href="/planets" id="entrar" style={{ color: '#f90', fontFamily: 'Arial', fontStyle: 'italic',   display: "none" }}>
              Acessar a home
            </a>
          </div>
        </CardInitial>
      </div>
    </Container>
  );
}

export default Home;
