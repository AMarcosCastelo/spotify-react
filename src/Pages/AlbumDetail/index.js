import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const AlbumDetail = () => {
  return (
    <section>
      <Link to="/">
        <button className="linkBack">{'< Voltar'}</button>
      </Link>
      <section className="containerDescription">
        <div className="albumDescription" >
          <div className="albumContent">
            <div className="divImg">
              {/* <img src="" alt=""/> */}
            </div>
            <div className="albumFooter">
              <span>Nome do Album</span>
              <span>Nome do Artista</span>
            </div>
          </div>
        </div>
      </section>
      <section className="musics">

      </section>
    </section>
  );
}

export default AlbumDetail;
