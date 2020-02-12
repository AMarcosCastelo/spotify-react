/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import AlbumSongs from '../../Components/AlbumSongs';
import api from '../../services/api';
import { AuthContext } from '../../store/auth';
import { verifyStatus } from '../../Utils/index';

const AlbumDetail = ({ match }) => {
  const [data, setData] = useState({
    nameArtist: '',
    nameAlbum: '',
    imgUrl: '',
    tracks: []
  });
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    async function getMusicsFromAlbum () {
      const response = await api.get(`/albums/${match.params.id.replace(':', '')}`, {
        headers: {
          Authorization: `Bearer ${userInfo.user.access_token}`
        }
      });
      const status = verifyStatus(response.status);
      if (status.action) {
        setData({
          nameArtist: response.data.artists[0].name,
          nameAlbum: response.data.name,
          imgUrl: response.data.images[0].url,
          tracks: response.data.tracks.items
        });
      } else {
        return <Redirect to={status.endPoint} />
      }
    }

    getMusicsFromAlbum();
  }, []);

  return (
    <>
      <Link to="/">
        <ReturnBtn>{'< Voltar'}</ReturnBtn>
      </Link>
      <Container>
        <section className="containerDescription">
          <div className="albumDescription" >
            <Content>
              <Image>
                <img src={data.imgUrl} alt={data.nameAlbum}/>
              </Image>
              <Footer>
                <span>{data.nameAlbum}</span>
                <span>{data.nameArtist}</span>
              </Footer>
            </Content>
          </div>
        </section>
        <Musics>
          <AlbumSongs tracks={data.tracks} />
        </Musics>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  padding: 30px;
  margin-top: 20px;
`;

const ReturnBtn = styled.button`
  background: transparent;
  color: #FAFAFA;
  border: none;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity .4s;
  &:hover {
    opacity: 1;
  }
`;

const Musics = styled.section`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  width: 250px;
  height: 250px;
  background-color: #FAFAFA;
  & img {
    width: 250px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  & span:first-child {
    font-size: 18px;
    color: #fff;
    padding-bottom: 5px;
    text-align: center;
  }
  & span:last-child {
    font-size: 16px;
    color: #999999;
  }
`;

export default AlbumDetail;
