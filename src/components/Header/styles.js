import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;

  padding: 10px 100px;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #f90;

  @media (max-width: 980px) {
    width: 100%;
  }

  @media only screen and (max-width : 420px) {
    width: 100%;
    display: inline-block;

  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 600px) {
    float: none;
    display: inline-flex;
    width: 100%;
  }
`;

export const ButtonHeader = styled.div`
  background: #f50;

  padding: 10px;
  border-radius: 15px;

  transition: opacity 0.3s;

  p {
    color: #ddd;
  }

  &:hover {
    opacity: 0.7;
  }
`;
