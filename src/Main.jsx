import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
// import 'babel-polyfill';
import './scss/variables.scss';
import './scss/fonts.scss';
import './scss/global.scss';
import Routes from './Routes';
import Loader from './app/components/Minors/Loader';
const Header = React.lazy(() => import('./app/components/Minors/Header'))
function Main() {
  const [scrolled, setScrolled] = React.useState(false),
    handleScroll = (state) => {
      setScrolled(state)
    };
  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false)
    }, { passive: true })
  })
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Header scrolled={scrolled} handleScroll={handleScroll} />
          <Routes />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}
export default Main;