import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Hamburger from '../../Others/Hamburger'
import Logo from '../../Others/Logo';
import Button from '../../Others/Button';
import './Navbar.scss';
import CompanyName from '../../Others/CompanyName';

function Navbar({ redux: { user } }) {
  const [navbarOpen, setNavbarOpen] = React.useState(true),
    handleHamburgerClick = () => {
      setNavbarOpen(!navbarOpen)
    };
  return (
    <React.Fragment>
      <div className="header__line"></div>
      <div className={`navbar ${navbarOpen ? "open" : ""}`}>
        <div className="navbar__close">
          <Logo />
          <Hamburger handleHamburgerClick={handleHamburgerClick} />
        </div>
        <div className="navbar__open">
          <div className="navbar__group first">
            <div className="navbar__group___first__item">
              <span>{getGreetingFromHours(new Date().getHours()) + ", "}</span>
              <span>{user.loggedIn ? user.user.email : "Guest"}</span>
            </div>
            <Link to="/starthere">Get Started</Link>
          </div>
          <div className="navbar__group last">
            {!user.loggedIn && (
              <Button text={"Sign In / Sign Up"} link="/login" />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


const getGreetingFromHours = (hours) => {
  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

const mapStateToProps = (state, dispatch) => ({
  redux: state
})

export default connect(mapStateToProps)(Navbar)
