import React from 'react';
import './Hamburger.scss';
function Hamburger({ handleHamburgerClick, scrolled, navbarOpen }) {
  return (
    <div className={`navbar__hamburger${scrolled ? " scrolled" : ""}${navbarOpen ? ' open' : ''}`} onClick={handleHamburgerClick}>
      <div className="navbar__hamburger_line line1"></div>
      <div className="navbar__hamburger_line line2" ></div>
      <div className="navbar__hamburger_line line3"></div>
    </div >
  )
}
export default Hamburger