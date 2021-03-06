import React, { useCallback, useEffect, useState } from "react";
// import api from "../../services/api";

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

function Characters() {
  const history = useHistory();
  const [personagem, setPersonagem] = useState("");
  const [resultPersonagem, setResultPersonagem] = useState([]);
  const [erro, setErro] = useState(false);

  // async function getPersonagens() {
  //   const response = await api.get("character");
  //   setPersonagem2(response.data);
  //   console.log(response.data);
  // }
  // useEffect(() => {
  //   getPersonagens();
  // }, []);

  function handleShowCharacters(character) {
    const name = character.name;
    history.push(`/individual/${name}`, {
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
          setResultPersonagem(data[i], ...data);
          return data;
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
        <InputContainer>
          <h2>Pesquise pelo nome do personagem: </h2>
          <div className="responsividadeButton">
            <input
              type="text"
              name=""
              placeholder="Ex: Goku"
              value={personagem}
              onChange={(e) => setPersonagem(e.target.value)}
            />
            <ButtonSearch onClick={() => handleSubmitCharacters(personagem)}>
              <img style={{ width: 40, height: 40 }} src={logo} alt="Buscar" />
            </ButtonSearch>
          </div>
        </InputContainer>

        {erro && <p>Erro</p>}
        {resultPersonagem.length !== 0 ? (
          <Card>
            <CardUnit>
              <div className="imagem">
                <img src={resultPersonagem.image} />
              </div>

              <div className="secao">
                <Name numberOfLines={1} ellipsizeMode="tail">
                  {resultPersonagem.name}
                </Name>
                <Species>Espécie: {resultPersonagem.species}</Species>
                <Status> Status: {resultPersonagem.status}</Status>
                <OriginPlanet>
                  Planeta de Origem: {resultPersonagem.originPlanet}
                </OriginPlanet>
                <Gender> Gênero: {resultPersonagem.gender}</Gender>

                <Series> Série Dragon Ball: {resultPersonagem.series}</Series>
              </div>
            </CardUnit>
          </Card>
        ) : (
          <Card>
            {data.map((personagem) => (
              <CardUnit
                key={personagem._id}
                onClick={() => handleShowCharacters(personagem)}
              >
                <div className="imagem">
                  <img src={personagem.image} alt="Imagem personagem" />
                </div>

                <div className="secao">
                  <div className="divison">
                    <p>Nome:</p>
                    <Name>{personagem.name}</Name>
                  </div>

                  <div className="divison">
                    <p>Espécie:</p>
                    <Species>{personagem.species}</Species>
                  </div>

                  <div className="divison">
                    <p>Status:</p>
                    <Status>{personagem.status}</Status>
                  </div>

                  <div className="divison">
                    <p>Planeta de Origem:</p>
                    <OriginPlanet>{personagem.originPlanet}</OriginPlanet>
                  </div>

                  <div className="divison">
                    <p>Gênero:</p>
                    <Gender>{personagem.gender}</Gender>
                  </div>

                  <div className="divison">
                    <p>Série Dragon Ball:</p>
                    <Series> {personagem.series}</Series>
                  </div>
                </div>
              </CardUnit>
            ))}
          </Card>
        )}
      </Container>
    </PageDefault>
  );
}

export default Characters;
