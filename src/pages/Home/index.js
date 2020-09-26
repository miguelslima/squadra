import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

import {
  Container,
  InputContainer,
  ButtonSearch,
  Card,
  CardUnit,
  Species,
  Status,
  OriginPlanet,
  Gender,
  Name,
  Series,
} from "./styles";
import data from "../../data.json";
import PageDefault from "../../components/PageDefault";
import { useHistory } from "react-router-dom";

import logo from "../../assets/button.jpg";

function Home() {
  const history = useHistory();
  const [personagem, setPersonagem] = useState("");
  const [resultPersonagem, setResultPersonagem] = useState([]);
  const [erro, setErro] = useState(false);

  // async function getPersonagens() {
  //   const response = await api.get("character");
  //   setPersonagens(response.data);
  //   console.log(response.data);
  // }
  // useEffect(() => {
  //   getPersonagens();
  // }, []);

  function handleShowCharacters(character) {
    const name = character.name;
    history.push(`/characters/${name}`, {
      name: character.name,
    });
  }

  const handleSubmitCharacters = useCallback(() => {
    if (personagem.length === 0) {
      setResultPersonagem([]);
    }

    if (personagem.length > 0) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name.includes(personagem)) {
          setResultPersonagem(data[i]);
          return;
        }
        // else {
        //   setErro(true);
        // }
      }
    } else {
      alert("Digite algo");
    }
  }, [personagem]);

  return (
    <PageDefault>
      <Container>
       <h1>Em construção</h1>
      </Container>
    </PageDefault>
  );
}

export default Home;
