import styled from "styled-components";

import dragonBall from "../../assets/dragonBall.jpg";

export const Container = styled.div`
  margin: 0 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background: url(${dragonBall});

  background-position: center;
  background-size: cover;
  background-repeat: repeat; */

  justify-content: space-evenly;
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

    border-radius: 10px 10px 0 0;

    img {
      width: 100%;
      height: 300px;

      overflow: center;
      object-fit: cover;
      object-position: top;


      border-radius: 10px 10px 0 0;
    }
  }
`;

export const CardUnit = styled.div`
  border-radius: 10px;
  margin: 10px;
  background: #ddd;

  :hover {
    border: 1px solid #aaa;


  }
`;

export const Species = styled.p``;

export const Status = styled.p``;

export const OriginPlanet = styled.p``;

export const Gender = styled.p``;

export const Name = styled.p``;

export const Series = styled.p``;
