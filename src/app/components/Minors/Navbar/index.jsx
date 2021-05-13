import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './Navbar.scss';
const Hamburger = React.lazy(() => import('../../Others/Hamburger'));
const Logo = React.lazy(() => import('../../Others/Logo'));
const Button = React.lazy(() => import('../../Others/Button'));
function Navbar({ redux: { user } }) {
  const [navbarOpen, setNavbarOpen] = React.useState(true),
    handleHamburgerClick = () => { setNavbarOpen(!navbarOpen) };
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
              <span>{helpingFunction.getGreetingFromHours(new Date().getHours()) + ", "}</span>
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
    </React.Fragment>)
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
