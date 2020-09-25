import styled from "styled-components";

import dragonBall from "../../assets/dragonBall.jpg";

export const Container = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background: url(${dragonBall});

  background-position: center;
  background-size: cover;
  background-repeat: repeat; */

  justify-content: center;
  align-items: center;

  .secao {
    width: 250px;
    flex-basis: 30%;
    flex-grow: 1;

    padding: 20px;
    /* text-align: center; */
  }

  .imagem {
    width: 250px;

    img {
      width: 100%;
      height: 300px;
    }
  }
`;

export const CardUnit = styled.div`
  border-radius: 10px;
  margin: 10px;
  background: #ddd;
`;

export const Species = styled.p``;

export const Status = styled.p``;

export const OriginPlanet = styled.p``;

export const Gender = styled.p``;

export const Name = styled.p``;

export const Series = styled.p``;
