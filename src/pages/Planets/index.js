import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

// import { Container } from './styles';

function Planets() {
  const history = useHistory();

  const [planets, setPlanets] = useState([]);
  const [residents, setResidents] = useState([]);

  async function getPlanets() {
    const response = await api.get("character");
    setPlanets(response.data);
    setResidents(response.data.residents);
    console.log(response.data);
    console.log(response.data.residents);
  }
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PageDefault>

      {planets.map((planet) => (
        <h1>Planeta: {planet}</h1>
      ))}


      {residents.map((resident) => (
        <h1>Residentes: {resident}</h1>
      ))}
    </PageDefault>
  );
}

export default Planets;
