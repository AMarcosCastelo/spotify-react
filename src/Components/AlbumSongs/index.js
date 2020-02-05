import React, { useState } from 'react';

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
    <section className="musics">
      <ul>
        <li className="liMusic">
          <div className="musicItem" onClick={() => setPlay(!play)}>
            <span><span className="indiceMusic">1. </span>{name}</span>
            <span>
              <div className="equalizer">
                {play ? animation() : ''}
              </div>
              {convertToHumanTime()}
            </span>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default AlbumSongs;
