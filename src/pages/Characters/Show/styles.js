import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: #f90;



  .cardIndividual {
    max-width: 800px;
    height: 600px;

    box-shadow: 9px 5px 15px rgba(50, 50, 50, 0.97);
    text-align: center;

    img {
      max-width: 600px;
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

export const ImageBackground = styled.div`

    background-image: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: bottom;

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
  background-color: #f90 !important;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;
