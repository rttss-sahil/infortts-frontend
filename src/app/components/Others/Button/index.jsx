import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'
function Button({ link, text, closeNavbar, closeModal, onClick }) {
  return link ? (
    <NavLink
      to={link}
      onClick={() => {
        closeModal && closeModal()
        onClick && onClick();
        closeNavbar && closeNavbar();
      }}
      className="button"
      style={{ backgroundColor: "#106dff" }}
    >
      {text}
    </NavLink>
  ) : (
    <div className="button"
      onClick={() => {
        closeModal && closeModal()
        onClick && onClick();
        closeNavbar && closeNavbar();
      }}
    >
      {text}
    </div>
  )
}
export default Button;