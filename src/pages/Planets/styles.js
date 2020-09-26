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

    .planetUnit {

      margin: 30px 15px;
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
        /* margin-top: -2%; */
        padding: 10px;
        background: #eee;
      }

      .residents {
        display: flex;
        flex-direction: column;
        background: #afafaf;
        padding-top: 25px;

        height: 169px;

        overflow-y: auto;

        ::-webkit-scrollbar-track {
          background-color: #f50;
        }
        ::-webkit-scrollbar {
          width: 6px;
          background: #faa;
        }
        ::-webkit-scrollbar-thumb {
          background: #f90;
        }

        ul {
          font-size: 20px;
          color: #f0f0f0;

          li {
            padding: 5px;
          }
          /* font-weight: bold; */
        }
      }
    }
  }
`;
