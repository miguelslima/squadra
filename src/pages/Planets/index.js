import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";

import api from "../../services/api";
import planetas from "../../planet.json";
import { useHistory } from "react-router-dom";

import { Container } from './styles';

function Planets() {
  const history = useHistory();

  const [planets, setPlanets] = useState([]);
  const [residents, setResidents] = useState([]);

  // async function getPlanets() {
  //   const response = await api.get("planet");
  //   // setPlanets(response.data);
  //   // setResidents(response.data);
  //   // console.log("Planetas: " + planets);
  //   // console.log("Residentes: " + residents);

  //   console.log(response);
  // }
  // useEffect(() => {
  //   getPlanets();
  // }, [getPlanets]);

  return (
    <PageDefault>
      <Container>

      <h1>Planetas</h1>
      {planetas.map((planeta) => (
        <div>
          <h2>{planeta.name}</h2>
          <h3>Residentes</h3>
          <p>
            {planeta.residents.map((resident) => (
              <p>{resident}</p>
              ))}
          </p>


          <img src={planeta.image} alt="" />
        </div>
      ))}


      </Container>
    </PageDefault>
  );
}

export default Planets;
