import React from 'react';
import { Link } from 'react-router-dom';
import AlbumSongs from '../../Components/AlbumSongs';
import styled from 'styled-components';

const AlbumDetail = () => {
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
                {/* <img src="" alt=""/> */}
              </Image>
              <Footer>
                <span>Nome do Album</span>
                <span>Nome do Artista</span>
              </Footer>
            </Content>
          </div>
        </section>
        <Musics>
          <AlbumSongs />
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
