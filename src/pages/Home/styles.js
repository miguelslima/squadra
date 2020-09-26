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
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
  }

  a {
    width: 450px;
    height: 80px;


    background: -webkit-radial-gradient( #fff, #00BFFF); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient( #fff, #00BFFF); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient( #fff, #00BFFF); /* Firefox 3.6 - 15 */
    background: radial-gradient(#fff, #00BFFF); /* 标准的语法 */

    text-align: center;

    padding: 15px 40px;
    margin-bottom: 80px;
    font-size: 40px;

    border: none;
    border-radius: 20px;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
