import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './app/components/Majors/Home';
import Error404 from './app/components/Majors/404'
import './scss/variables.scss';
import './scss/fonts.scss';
import './scss/global.scss';

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Main;