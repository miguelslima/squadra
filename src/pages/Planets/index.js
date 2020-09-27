import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";

import api from "../../services/api";
import planetas from "../../planet.json";
import { useHistory } from "react-router-dom";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { Container } from "./styles";

function Planets() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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

  function toggleResidents(id) {
    console.log("id planeta " + id);

    if (id == "5c7c8a8b12b25c00177aa153") {
      setOpen(!open);
      return;
    } else if (id === "5c7c8a9c12b25c00177aa154") {
      setOpen1(!open1);
      return;
    } else if (id === "5c7c8a5e12b25c00177aa151") {
      setOpen2(!open2);
      return;
    } else if (id === "5c7c8a8312b25c00177aa152") {
      setOpen3(!open3);
      return;
    }
  }

  return (
    <PageDefault>
      <Container>
        <h1>Planetas</h1>
        <div className="planetCard">
          {planetas.map((planeta) => (
            <div key={planeta._id} className="planetUnit">
              <h2>{planeta.name}</h2>
              <img src={planeta.image} alt="" />
              {console.log(planeta._id)}
              <button onClick={() => toggleResidents(planeta._id)}>
                <h3>Residentes</h3>
                {open ? <FaArrowUp /> : <FaArrowDown />}
              </button>

              {open && (
                <div className="residents">
                  <ul>
                    {planeta.residents.map((resident, key) => (
                      <li key={key}>{resident}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </PageDefault>
  );
}

export default Planets;
