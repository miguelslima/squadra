import { createGlobalStyle } from "styled-components";

import backgroundHome from "../assets/backgroundHome.jpg";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    --webkit-font-smoothing: antialiased;

    /* background-image: url(${backgroundHome});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
     filter: grayscale(100%); */

  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
