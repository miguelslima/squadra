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
    align-items: center;

    @media (max-width: 590px) {
      img {
        width: 150px;
        height: 150px;
      }

      a {
        margin-bottom: 40px;
        width: 200px;
        height: 40px;

        font-size: 12px;

        padding: 10px 0;

      }
    }

    @media (min-width: 500px) and (max-width: 659px) {
      img {
        width: 120px;
        height: 120px;
      }

      a {
        margin-bottom: 0;

        width: 300px;
        height: 40px;

        font-size: 18px;
      }
    }

    @media (min-width: 660px) and (max-width: 969px) {
      img {
        width: 180px;
        height: 160px;
      }

      a {
        margin-bottom: 15px;

        width: 300px;
        height: 60px;

        font-size: 22px;
      }
    }
  }

  a {
    width: 350px;
    height: 80px;

    background: -webkit-radial-gradient(#fff, #00bfff); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(#fff, #00bfff); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(#fff, #00bfff); /* Firefox 3.6 - 15 */
    background: radial-gradient(#fff, #00bfff); /* 标准的语法 */

    text-align: center;

    padding: 15px 40px;
    margin-bottom: 80px;

    font-size: 35px;

    border: none;
    border-radius: 20px;

    transition: opacity 0.3s;

    @media (max-width: 803px) {
      font-size: 25px;
    }

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: 420px) {
      a {
        font-size: 10px;

      }

    }

  }
`;
