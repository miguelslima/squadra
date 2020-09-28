import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 30px;

  .planetCard {
    width: 640px;
    margin: 20px 0;

    padding: 30px 20px 40px 20px;

    box-shadow: 9px 5px 15px rgba(50, 50, 50, 0.97);

    border-radius: 10px;

    .planetUnit {
      height: 462px;
      border: 1px solid #f90;
      border-radius: 10px;

      text-align: center;

      h2 {
        padding: 5px 0px;
        background: #f90;
        text-align: center;
        border-radius: 10px 10px 0 0;
        font-size: 30px;
      }

      img {
        width: 100%;
        height: 200px;
      }

      button {
        display: flex;

        justify-content: space-between;
        align-items: center;

        border: none !important;
        background-color: white !important;

      }

      h3 {
        padding: 10px;
      }

      .residents {
        display: flex;
        flex-direction: column;
        background: #afafaf;
        padding-top: 25px;

        border-radius: 0 0 10px 10px;

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
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    .planetCard {
      width: 100%;
    }
  }
`;
