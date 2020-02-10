'use strict';
import { hot } from 'react-hot-loader';
import React from 'react';
import Routes from './routes';
import styled, { createGlobalStyle } from 'styled-components';

import logo from './img/logo.png';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar>
          <img src={logo} />
        </SideBar>
        <Main>
          <Routes />
        </Main>
      </Container>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif ;
    background: #121212;
    color: #fff;
    -webkit-font0smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #999999;
    border-radius: 20px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1DB954;
    border-radius: 20px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
`;

const SideBar = styled.div`
  padding: 10px;
  min-width: 200px;
  width: 200px;
  text-align: center;
  & img {
    max-width: 80px;
  }
`;

const Main = styled.main`
  width: 100%;
  padding: 10px;
`;

export default hot(module)(App);
