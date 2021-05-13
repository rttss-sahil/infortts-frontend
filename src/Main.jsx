import React, { Suspense } from 'react';
import 'babel-polyfill';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/variables.scss';
import './scss/fonts.scss';
import './scss/global.scss';
import Loader from './app/components/Minors/Loader/Loading3';
const Home = React.lazy(() => import("./app/components/Majors/Home"));
const Error404 = React.lazy(() => import('./app/components/Majors/404'));
function Main() {
  return (
    <BrowserRouter>
      <Suspense fallback={Loader}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:page" component={Error404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
export default Main;