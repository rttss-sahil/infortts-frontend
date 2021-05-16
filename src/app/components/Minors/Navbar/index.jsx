import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import './Navbar.scss';
const Button = React.lazy(() => import('../../Others/Button'));
function Navbar({ redux: { user }, navbarOpen, closeNavbar }) {
  const now = helpingFunction.getGreetingFromHours(new Date().getHours());
  return (
    <div className={`navbar${navbarOpen ? " open" : ""}`}>
      <div className="navbar__group first">
        <div className="navbar__group___first__item">
          <span>{now + ", "}</span>
          <span>{user.loggedIn ? user.user.email : "Guest"}</span>
        </div>
        <NavLink className="navbar__group__second__item" to="/starthere" onClick={() => closeNavbar()}>
          <span>Get Started</span>
          <BsArrowRight />
        </NavLink>
      </div>
      <div className="navbar__group pricing">
        Pricing
      </div>
      <div className="navbar__group templates">
        Templates
      </div>
      <div className="navbar__group marketing">
        Marketing
      </div>
      <div className="navbar__group career">
        Jobs/Career With Us
      </div>
      <div className="navbar__group mobile_app">
        Mobile App (*beta testing)
      </div>
      <div className="navbar__group last">
        {user.loggedIn && (
          <Button text={"Sign In / Sign Up"} link="/signup" closeNavbar={closeNavbar} />
        )}
      </div>
    </div >
  )
}
const helpingFunction = {
  getGreetingFromHours: (hours) => {
    if (hours < 12) {
      return "Good Morning";
    } else if (hours < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }
}
export default connect((state, dispatch) => ({ redux: state }))(Navbar)