import React from 'react';
import './Hamburger.scss';
function Hamburger({ handleHamburgerClick, scrolled }) {
  return (
    <div className={`navbar__close__hamburger ${scrolled ? "scrolled" : ""}`} onClick={handleHamburgerClick}>
      <div className="navbar__close__hamburger_line line1"></div>
      <div className="navbar__close__hamburger_line line2" ></div>
      <div className="navbar__close__hamburger_line line3"></div>
    </div >
  )
}

export default Hamburger;
