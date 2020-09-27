import styled from "styled-components";

import backgroundHome from "../../assets/backgroundHome.jpg";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  justify-content: center;

  width: 100%;
  height: 100vh;

  #div {
    width: 80%;
    height: auto;
    color: red;
    flex: 1;
    flex-direction: row;

    justify-content: center;
  }

  #div .bg {
    width: 100%;
    min-height: 100vh;

    background-image: url(${backgroundHome});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

    opacity: 0.2;
    position: absolute;
    left: 0;
    z-index: -1;
  }
`;

export const CardInitial = styled.div`
  width: 90vw;
  height: 90vh;

  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
  margin: 40px auto;

  padding: 30px 20px;

  box-shadow: 9px 5px 15px rgba(50, 50, 50, 0.97);

  .acessar {
    width: 100%;

    display: flex;
    flex-direction: row;

    justify-content: center;
    margin: 0 20px;

    @media (max-width: 660px) {
      a {
        width: 250px;
        height: 60px;

        font-size: 24px;
      }
    }

    @media screen and (min-width: 320px) {
      a {
        width: 160px;
        height: 60px;

        font-size: 16px;
        margin: 0 10px;
      }
    }

    a {
      width: 350px;
      height: 80px;

      background-color: #f90;

      text-align: center;

      padding: 15px 40px;
      margin: 0 10px;
      margin-bottom: 80px;
      font-size: 40px;

      border: none;
      border-radius: 20px;

      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }

    @media (min-width: 500px) and (max-width: 659px) {
      a {
        padding: 5px 0;

        width: 200px;
        height: 40px;

        font-size: 24px;
      }
    }

    @media screen and (max-width: 420px) {
      a {
        width: 140px;
        height: 50px;

        font-size: 16px;

        padding: 15px 0px;
      }
    }

  }
`;
