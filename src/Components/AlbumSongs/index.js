import React, { useState } from 'react';
import styled from 'styled-components';
import convertToHumanTime from 'src/Utils';

import './styles.css';

const AlbumSongs = () => {
  const [play, setPlay] = useState(false);

  const animation = () => {
    return (
      <>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
        <span className="bar bar4"></span>
        <span className="bar bar5"></span>
        <span className="bar bar6"></span>
        <span className="bar bar7"></span>
      </>
    );
  };

  return (
    <Musics>
      <ul>
        {Array.from({ length: 10 }).map((music, index) => (
          <LiMusic key={index}>
            <Music onClick={() => setPlay(!play)}>
              <span>
                <IndexMusic>{index + 1}. </IndexMusic>
                Nome da Música
              </span>
              <span>
                <Equalizer>
                  {play ? animation() : ''}
                </Equalizer>
                {convertToHumanTime()}
              </span>
            </Music>
          </LiMusic>
        ))}
      </ul>
    </Musics>
  )
};

const Musics = styled.section`
  padding: 0 30px;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  & ul {
    list-style-type: none;
  }
`;

const Music = styled.div`
  display: flex;
  justify-content: space-between;
  transition: background .4s;
  padding: 7px;
  &:hover {
    background: #000;
    color: #fff;
  }

  & span:first-child {
    font-size: 14px;
    color: #fff;
  }

  & span:last-child {
    font-size: 14px;
    color: #999999;
  }
`;

const LiMusic = styled.li`
  color: #999999;
  cursor: pointer;
  opacity: .7;
  margin-bottom: 7px;
`;

const IndexMusic = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

const Equalizer = styled.div`
  height: 19px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin-right: 10px;
`;

export default AlbumSongs;
