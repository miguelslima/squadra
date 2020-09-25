import React, { useEffect, useState } from "react";
import api from "../../services/api";

import {
  Container,
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

function Home() {
  const [personagens, setPersonagens] = useState([]);

  // async function getPersonagens() {
  //   const response = await api.get("character");
  //   setPersonagens(response.data);
  //   console.log(response.data);
  // }
  // useEffect(() => {
  //   getPersonagens();
  // }, []);

  return (
    <>
      <Container>
        <Card>
          {data.map((personagem) => (
            <CardUnit>
              <div className="imagem">
                <img src={personagem.image} />
              </div>

              <div className="secao">
                <Name>Nome: {personagem.name}</Name>
                <Species>Espécie: {personagem.species}</Species>
                <Status> Status: {personagem.status}</Status>
                <OriginPlanet>
                  Planeta de Origem: {personagem.originPlanet}
                </OriginPlanet>
                <Gender> Gênero: {personagem.gender}</Gender>

                <Series> Série Dragon Ball: {personagem.series}</Series>
              </div>
            </CardUnit>
          ))}
        </Card>
      </Container>
    </>
  );
}

export default Home;
