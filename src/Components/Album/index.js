import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

const Album = () => {
  return (
    <Link to="Album">
      <div className="containerAlbum">
        <div className="divItem">
          <div className="divImgAlbum">
            <img src="" className="imgAlbum" alt=""/>
          </div>
          <div className="footerItem">
            <span>Nome do Album</span>
            <span>Nome do Artista</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Album;
