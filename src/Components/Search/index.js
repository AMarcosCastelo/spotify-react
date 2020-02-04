import React, { useState } from 'react';

import './styles.css';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <div className="searchContainer">
      <label>Procure por artistas, álbuns e músicas</label>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder="Comece a escrever..."
      />
    </div>
  )
}

export default Search;
