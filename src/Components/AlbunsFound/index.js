import React from 'react';
import Album from '../Album';

import './styles.css';

const AlbunsFound = () => {
  return (
    <>
      <section className="albums">
        <h4>Procurando...</h4>
        <div className="albumsItems">
          <Album />
          <Album />
          <Album />
          <Album />
          <Album />
        </div>
      </section>
    </>
  )
}

export default AlbunsFound;
