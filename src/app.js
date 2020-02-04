'use strict';
import { hot } from 'react-hot-loader';
import React from 'react';
import Routes from './routes';

import logo from './img/logo.png';
import 'src/app.css';
import 'src/global.css';

const Title = () => {
  return (
    <div className="appContainer">
      <div className="sideBar">
        <img src={logo} />
      </div>
      <main>
        <Routes />
      </main>
    </div>
  );
};

export default hot(module)(Title);
