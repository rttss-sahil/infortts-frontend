import React from 'react'
import './Header.scss'
const CompanyName = React.lazy(() => import('../../Others/CompanyName'));
const Hamburger = React.lazy(() => import('../../Others/Hamburger'));
const Logo = React.lazy(() => import('../../Others/Logo'));
const Navbar = React.lazy(() => import('../../Minors/Navbar'));
function Header({ scrolled }) {
  const [navbarOpen, setNavbarOpen] = React.useState(true),
    handleHamburgerClick = () => { setNavbarOpen(!navbarOpen) };
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header__line"></div>
      <main>
        <Logo />
        <CompanyName scrolled={scrolled} />
        <Hamburger handleHamburgerClick={handleHamburgerClick} scrolled={scrolled} />
      </main>
      <Navbar scrolled={scrolled} navbarOpen={navbarOpen} />
    </header>
  )
}

export default Header
