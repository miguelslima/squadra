import React from 'react';

import Header from '../Header'
// import Footer from '../Footer'

import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  /* padding-top: 50px; */
  /* padding-left: 5%; */
  /* padding-right: 5%; */
  justify-content: center;
`;

function PageDefault({ children }) {
  return (
    <>
      <Header />
        <Main>
          {children}
        </Main>
      {/* <Footer /> */}
    </>
  )
}

export default PageDefault;
