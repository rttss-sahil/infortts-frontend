import React, { Suspense } from 'react';
import 'babel-polyfill';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/variables.scss';
import './scss/fonts.scss';
import './scss/global.scss';
import Loader from './app/components/Minors/Loader/Loading3';
const Home = React.lazy(() => import("./app/components/Majors/Home"));
const Error404 = React.lazy(() => import('./app/components/Majors/404'));
const Header = React.lazy(() => import('./app/components/Minors/Header'))
function Main() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false)
    }, { passive: true })
  })
  return (
    <Suspense fallback={Loader}>
      <BrowserRouter>
        <Header scrolled={scrolled} />
        {/* <Loader /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:page" component={Error404} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}
export default Main;