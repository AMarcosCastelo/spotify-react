import React from 'react';
import Album from '../Album';
import styled from 'styled-components';

const AlbunsFound = () => {
  return (
    <>
      <Albums>
        <h4>Procurando...</h4>
        <AlbumsItems>
          <Album />
          <Album />
          <Album />
          <Album />
          <Album />
        </AlbumsItems>
      </Albums>
    </>
  )
};

const Albums = styled.section`
  padding: 20px;
  & h4 {
    color: #FAFAFA;
    font-size: 18px;
    font-weight: 400;
  }
`;

const AlbumsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 450px;
  max-width: 900px;
  overflow: auto;
`;

export default AlbunsFound;
