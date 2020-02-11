/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Album from '../Album';

const AlbunsFound = ({ data }) => {
  return (
    <>
      <Albums>
        <AlbumsItems>
          {data.map((album) => (
            <Album
              key={album.id}
              urlImage={album.image_url}
              albumName={album.name_album}
              artistName={album.name_artist}
              id={album.id}
            />
          ))}
        </AlbumsItems>
      </Albums>
    </>
  )
};

const mapStateToProps = state => ({
  data: state.searchReducer
});

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

export default connect(mapStateToProps)(AlbunsFound);
