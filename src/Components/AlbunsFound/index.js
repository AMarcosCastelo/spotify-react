/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Album from '../Album';
import { AuthContext } from '../../store/auth';
import api from '../../services/api';
import ActionUpdate from '../../actions';

const AlbunsFound = ({ data, handleData }) => {
  const [payload, setPayload] = useState(data);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (payload.length !== 0) {
      handleData(payload);
    }
  }, [payload]);

  useEffect(() => {
    async function getInitialData () {
      if (payload.length === 0) {
        const albums = [];
        const response = await api.get('/me/player/recently-played', {
          headers: {
            Authorization: `Bearer ${userInfo.user.access_token}`
          }
        });

        response.data.items.forEach((track) => {
          albums.push(track.track.album);
        });
        setPayload(albums);
      }
    };

    getInitialData();
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  handleData: (payload) => {
    dispatch(ActionUpdate(payload));
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbunsFound);
