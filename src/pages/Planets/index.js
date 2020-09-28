import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";

import api from "../../services/api";
import planetas from "../../planet.json";
import { useHistory } from "react-router-dom";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import SlickSlider from "react-slick";

import { Container } from "./styles";

function Planets() {
  const history = useHistory();
  const [open, setOpen] = useState(false);

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
    setOpen(!open);
  }

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "#f" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <PageDefault>
      <Container>
        <h1>Planetas</h1>

        <div className="planetCard">
          <SlickSlider {...settings}>
            {planetas.map((planeta) => (
              <div key={planeta._id} className="planetUnit">
                <h2>{planeta.name}</h2>
                <img src={planeta.image} alt="" />
                <button onClick={() => toggleResidents()}>
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
          </SlickSlider>
        </div>
      </Container>
    </PageDefault>
  );
}

export default Planets;
