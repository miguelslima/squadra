import React from 'react';

import Header from '../Header'
import Footer from '../Footer';

import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  justify-content: center;
`;

function PageDefault({ children }) {
  return (
    <>
      <Header />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  )
}

export default PageDefault;
