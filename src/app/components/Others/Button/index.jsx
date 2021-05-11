import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
function Button({ link, bgcolor, text, textcolor }) {
  return (
    <Link to={link} className="button" style={{ backgroundColor: bgcolor || "#106dff", color: textcolor || "#daeef4" }}>
      {text}
    </Link>
  )
}

export default Button
