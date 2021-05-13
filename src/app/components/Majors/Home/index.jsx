import React from 'react';
import './Home.scss';
const Navbar = React.lazy(() => import('../../Minors/Navbar'));
const CompanyName = React.lazy(() => import('../../Others/CompanyName'));
const Home = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false)
    }, { passive: true })
  })
  return (
    <React.Fragment>
      <header>
        <CompanyName scrolled={scrolled} />
        <Navbar scrolled={scrolled} />
      </header>
      <div className="home__container">
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h2>dkshbsjdkhfhjdsfj</h2>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
        <h1>dkshbsjdkhfhjdsfj</h1>
      </div>
    </React.Fragment>
  )
}
export default Home;