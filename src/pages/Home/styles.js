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

  justify-content: center;
  align-items: center;

  .secao {
    width: 250px;
    flex-basis: 30%;
    flex-grow: 1;

    padding: 20px;

    background: #f90;
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

export const CardUnit = styled.a`
  border-radius: 10px;
  margin: 10px;
  background: #ddd;

  cursor: pointer;

  &:hover {
    border: 1px solid #aaa;
    transform: scale(1.05);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  .responsividadeButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 35px;
    margin: 30px;
    text-align: center;
  }

  input {
    padding: 5px 10px;

    &:focus {
      border: 2px solid #f90;
    }
  }

  @media (max-width: 960px) {
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 880px) {
    flex-direction: column;

    h2 {
      font-size: 25px;
    }
  }
`;

export const ButtonSearch = styled.button`
  border: none !important;
  background-color: white !important;

  margin-left: 10px;
`;

export const Species = styled.p``;

export const Status = styled.p``;

export const OriginPlanet = styled.p``;

export const Gender = styled.p``;

export const Name = styled.p`
  font-size: 21px;
  color: #f00;
`;

export const Series = styled.p``;
