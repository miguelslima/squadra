import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PageDefault from "../../components/PageDefault";

import { Container } from "./styles";

import api from "../../services/api";

function Characters() {
  const history = useHistory();

  const [species, setSpecies] = useState('');
  const [originPlanet, setOriginPlanet] = useState('');
  const [namePersonagem, setNamePersonagem] = useState('');
  const [image, setImage] = useState('');

  let name = '';
  if(history.location.state && history.location.state.name) {
    name = history.location.state.name;
  } else {
    history.push('/')
  }

  useEffect(() => {
    api.get(`character/${name}`)
    .then(response => {
        setSpecies(response.data.species);
        setOriginPlanet(response.data.originPlanet);
        setNamePersonagem(response.data.name);
        setImage(response.data.image);
      })

    .catch(err => {
        if(err.response.status === 401) {
            history.push('/');
        }
      });
}, [history, name]);


  return (
    <PageDefault>
      <Container>

      <img src={image} alt={`Imagem de ${name}`} />
      <h1>Personagens </h1>
      <p> {name} </p>
      <p>Especies {species}</p>
      <p>Origem do Planeta {originPlanet}</p>
      </Container>
    </PageDefault>
  );
}

export default Characters;
