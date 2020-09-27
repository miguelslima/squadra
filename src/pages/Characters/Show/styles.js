import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;

  .cardIndividual {
    max-width: 800px;
    height: 500px;

    box-shadow: 9px 5px 15px rgba(50, 50, 50, 0.97);
    text-align: center;

    padding: 20px 0;
    img {
      max-width: 800px;
      max-height: 400px;
      display: inline-block;
      margin-bottom: 50px;
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
  height: 60vh;
  width: 70vw;
  position: relative;
  color: #fff;

  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const Name = styled.h1`
  text-align: center;
  font-size: 40px;
  padding-top: 50px;

`;

export const Species = styled.p`
  padding: 5px;
`;

export const OriginPlanet = styled.p`
  padding: 10px;
`;

export const ButtonBack = styled.button`
  border: none !important;
  background-color: #fff !important;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;
