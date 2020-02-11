import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../store/auth';

const Login = () => {
  const { logIn } = useContext(AuthContext);

  return (
    <Container>
      <h1>Para continuar, faça login com a conta do Spotify.</h1>
      <Btn onClick={() => {
        logIn()
      }}>Continuar com Spotify.</Btn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Btn = styled.button`
  cursor: pointer;
  width: 400px;
  height: 50px;
  margin-top: 40px;
  border-radius: 30px;
  border: none;
  background-color: #1db954;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: all .4s;
  &:hover {
    background-color: #1ed760;
  }
`;

export default Login;
