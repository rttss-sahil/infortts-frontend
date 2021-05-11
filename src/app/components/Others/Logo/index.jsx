import React from 'react'
import './Logo.scss';
import logo from '../../../static/img/brand/favicon.svg';
import { Link } from 'react-router-dom';
function Logo() {
  return (
    <div className="navbar__close__logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo;
