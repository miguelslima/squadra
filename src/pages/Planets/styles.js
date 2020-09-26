import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  min-height: 100vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    flex-direction: column;
  }


  .planetCard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    .planetUnit {

      margin: 10px;
      height: 450px;
      border: 1px solid #f90;

      text-align: center;

      box-shadow: 9px 5px 15px rgba(50, 50, 50, 0.97);

      h2 {
        padding: 5px 0px;
        background: #f90;
        text-align: center;
      }

      img {
        width: 300px;
        height: 200px;
      }

      h3 {
        margin-top: -2%;
        padding: 10px;
        background: #555
      }

      .residents {
        display: flex;
        flex-direction: column;

        height: 140px;

        overflow-y: auto;

        ::-webkit-scrollbar-track {
          background-color: #f4f4f4;
        }
        ::-webkit-scrollbar {
          width: 6px;
          background: #f4f4f4;
        }
        ::-webkit-scrollbar-thumb {
          background: #dad7d7;
        }
        ul {
          font-size: 20px;
          color: #f90;
          font-weight: bold;
        }
      }
    }
  }
`;
