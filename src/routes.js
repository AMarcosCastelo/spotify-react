import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AlbumDetail from './Pages/AlbumDetail';
import Login from './Pages/Login';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Album" component={AlbumDetail} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
