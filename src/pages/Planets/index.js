import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";

import api from "../../services/api";
import planetas from "../../planet.json";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

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
        <div className="planetCard">
          {planetas.map((planeta) => (
            <div className="planetUnit">
              <h2>{planeta.name}</h2>
              <img src={planeta.image} alt="" />
              <h3>Residentes</h3>
              <div className="residents">
                <ul>
                  {planeta.residents.map((resident) => (
                    <li>{resident}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageDefault>
  );
}

export default Planets;
