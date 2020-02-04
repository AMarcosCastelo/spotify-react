import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AlbumDetail from './Pages/AlbumDetail';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Album">
          <AlbumDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
