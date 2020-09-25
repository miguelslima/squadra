import styled from "styled-components";

export const Container = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

`;


export const ButtonHeader = styled.div`
  background: #f50;

  padding: 10px;
  border-radius: 15px;

  transition: opacity 0.3s;

  p {
    color: #DDD;
  }

  &:hover {
    opacity: 0.7;
  }
`;

