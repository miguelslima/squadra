import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;


  .cardIndividual {
    width: 500px;

    background: #ff0;

    text-align: center;

    img {
      max-width: 100%;
    }

    h1 {
      font-size: 20px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Name = styled.h1`
  text-align: center;
  font-size: 40px;
`;

export const Species = styled.p`
  padding: 5px;
`;

export const OriginPlanet = styled.p`
  padding: 10px;
`;

export const ButtonBack = styled.button`
  border: none !important;
  background-color: white !important;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;
