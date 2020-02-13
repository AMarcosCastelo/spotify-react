/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Album from '../Album';

const AlbunsFound = ({ data }) => {
  const [albums, setAlbums] = useState(data);

  useEffect(() => {
    if (data.length === 0) {
      const localData = JSON.parse(localStorage.getItem('albums'));
      if (localData) {
        if (localData.length === 0) {
          localStorage.setItem('albums', JSON.stringify(data));
          setAlbums(data);
        } else {
          setAlbums(localData);
        }
      } else {
        localStorage.setItem('albums', JSON.stringify(data));
      }
    } else {
      localStorage.setItem('albums', JSON.stringify(data));
      setAlbums(data);
    }
  }, [data]);

  return (
    <>
      <Albums>
        <AlbumsItems>
          {albums.map((album) => (
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
  height: 100%;
  max-height: 510px;
  width: 100%;
  max-width: 970px;
  overflow: auto;
`;

export default connect(mapStateToProps)(AlbunsFound);
