import styled from "styled-components";

export const Container = styled.div`
  margin: 0 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  .secao {
    width: 300px;
    height: 215px;
    flex-basis: 30%;
    flex-grow: 1;

    padding: 15px;

    background: #f90;
    border-radius: 0 0 10px 10px;

    .divison {
      display: flex;
      flex-direction: row;

      align-items: center;

      p {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .imagem {
    width: 300px;

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
  margin: 15px;
  background: #ddd;

  cursor: pointer;

  box-shadow: 9px 5px 15px rgba(50, 50, 50, 0.97);

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

export const Species = styled.text`
  font-size: 21px;
  color: #f10;
  padding: 0 10px;
`;

export const Status = styled.text`
  font-size: 21px;
  color: #f10;
  padding: 0 10px;
`;

export const OriginPlanet = styled.text`
  font-size: 21px;
  color: #f10;
  padding: 0 3px;
`;

export const Gender = styled.text`
  font-size: 21px;
  color: #f10;
  padding: 0 10px;
`;

export const Name = styled.text`
  font-size: 21px;
  color: #f10;
  padding: 0 10px;
`;

export const Series = styled.text`
  font-size: 21px;
  color: #f10;
  padding: 0 2px;
`;
