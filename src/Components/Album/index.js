/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Album = ({ key, urlImage, albumName, artistName, id }) => {
  return (
    <Link to={`Album:${id}`}>
      <Container key={key}>
        <DivItem>
          <ImgAlbum>
            <img src={urlImage} alt={albumName}/>
          </ImgAlbum>
          <FooterItem>
            <span>{albumName}</span>
            <span>{artistName}</span>
          </FooterItem>
        </DivItem>
      </Container>
    </Link>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 250px;
  margin-top: 10px;
`;

const ImgAlbum = styled.div`
  width: 120px;
  height: 120px;
  background-color: #fff;
  & img {
    max-width: 120px;
  }
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  justify-content: center;
  & span:first-child {
    font-size: 14px;
    flex-grow: 1;
    flex-basis: auto;
    text-align: center;
    color: #fff;
    padding-bottom: 5px;
    width: 120px;
  }

  & span:last-child {
    font-size: 14px;
    color: #999999;
  }
`;

const DivItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 20px 20px;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    z-index: 1000;
  }
`;

export default Album;
