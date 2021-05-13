import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'
function Button({ link, bgcolor, text, textcolor, closeNavbar }) {
  return (
    <NavLink to={link} onClick={closeNavbar} className="button" style={{ backgroundColor: bgcolor || "#106dff", color: textcolor || "#daeef4" }}>
      {text}
    </NavLink>
  )
}

export default Button
