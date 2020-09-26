import styled from "styled-components";

export const FooterBase = styled.footer`
  margin-top: 0px;
  background: #f90;
  border-top: 2px solid #ddd;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;

  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 800px) {
    margin-bottom: 0px;
  }
`;
