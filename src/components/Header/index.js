import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import { Container, HeaderContainer, ButtonHeader } from "./styles";

export default function Header() {
  return (
    <Container>
      <img
        style={{ width: 120, height: 40 }}
        src={logo}
        alt="Logo Dragon Ball"
      />

      <HeaderContainer>
        <ButtonHeader>
          <Link to="/"><p>Home</p></Link>
        </ButtonHeader>
        <ButtonHeader>
          <Link to="/planets"><p>Planetas</p></Link>
        </ButtonHeader>

        <ButtonHeader>

        <Link to="/characters"><p>Personagens</p></Link>
        </ButtonHeader>
      </HeaderContainer>
    </Container>
  );
}
