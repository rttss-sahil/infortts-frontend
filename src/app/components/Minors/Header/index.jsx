import React from 'react'
import './Header.scss'
const CompanyName = React.lazy(() => import('../../Others/CompanyName'));
const Hamburger = React.lazy(() => import('../../Others/Hamburger'));
const Logo = React.lazy(() => import('../../Others/Logo'));
const Navbar = React.lazy(() => import('../../Minors/Navbar'));
function Header({ scrolled, handleScroll }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false),
    handleHamburgerClick = () => { setNavbarOpen(!navbarOpen) },
    closeNavbar = () => {
      setNavbarOpen(!navbarOpen);
    }
  React.useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "visible";
    navbarOpen ? handleScroll(false) : window.scrollY > 20 ? handleScroll(true) : handleScroll(false)
  })
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header__line">
        lowercase developers / infortts
      </div>
      <main>
        <Logo closeNavbar={closeNavbar} />
        <CompanyName scrolled={scrolled} />
        <Hamburger handleHamburgerClick={handleHamburgerClick} scrolled={scrolled} navbarOpen={navbarOpen} />
      </main>
      <Navbar scrolled={scrolled} navbarOpen={navbarOpen} closeNavbar={closeNavbar} />
    </header>
  )
}
export default Header;