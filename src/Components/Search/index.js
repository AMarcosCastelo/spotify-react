import React, { useState } from 'react';
import styled from 'styled-components';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <label>Procure por artistas, álbuns e músicas</label>
      <Input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder="Comece a escrever..."
      />
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  & label {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const Input = styled.input`
  height: 50px;
  position: relative;
  background: transparent;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  width: 90%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #fff;
`;

export default Search;
