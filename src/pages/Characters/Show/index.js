import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PageDefault from "../../../components/PageDefault";

import { Container, Name, Species, OriginPlanet, ButtonBack, ImageBackground } from "./styles";

import api from "../../../services/api";

function ShowCharacters() {
  const history = useHistory();

  const [species, setSpecies] = useState("");
  const [originPlanet, setOriginPlanet] = useState("");
  const [namePersonagem, setNamePersonagem] = useState("");
  const [image, setImage] = useState("");

  let name = "";
  if (history.location.state && history.location.state.name) {
    name = history.location.state.name;
  } else {
    history.push("/");
  }

  useEffect(() => {
    api
      .get(`character/${name}`)
      .then((response) => {
        setSpecies(response.data.species);
        setOriginPlanet(response.data.originPlanet);
        setNamePersonagem(response.data.name);
        setImage(response.data.image);
      })

      .catch((err) => {
        if (err.response.status === 401) {
          history.push("/");
        }
      });
  }, [history, name]);

  function toggleBack() {
    history.push("/characters");
  }

  return (
    <PageDefault>
      <Container>


        <ButtonBack onClick={toggleBack}>
          <FaArrowLeft size={30} />
          Voltar à pages Personagens
        </ButtonBack>
        <ImageBackground backgroundImage={image}>
        <Name> {name} </Name>
        <div className="cardIndividual">
          <img src={image} alt={`Imagem de ${name}`} />
          <Species>Espécie: {species}</Species>
          <OriginPlanet>Planeta de origem: {originPlanet}</OriginPlanet>
        </div>
        </ImageBackground>
      </Container>
    </PageDefault>
  );
}

export default ShowCharacters;
