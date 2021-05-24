import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import './Navbar.scss';
import { FaPeopleCarry, FaMoneyBillWave } from 'react-icons/fa'
import { IoMdPricetag } from 'react-icons/io'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { HiTemplate, HiHome } from 'react-icons/hi'
import actions from '../../../store/actions/actions';
const Button = React.lazy(() => import('../../Others/Button'));
function Navbar({ redux, dispatch, navbarOpen, closeNavbar }) {
  const now = helpingFunction.getGreetingFromHours(new Date().getHours());
  const hanldeLogOutClick = () => {
    dispatch(actions.logUserOut())
    dispatch(actions.showModal({
      message: 'Logged Out successfully',
      link: '/',
      buttonText: 'Back To Home'
    }))
    return;
  }
  return (
    <div className={`navbar${navbarOpen ? " open" : ""}`}>
      <div className="navbar__group first">
        <div className="navbar__group___first__item">
          <span>{now + ", "}</span>
          <span>{redux.user.loggedIn ? redux.user.user.username : "Guest"}</span>
        </div>
        <NavLink className="navbar__group__second__item" to="/start-here" onClick={() => closeNavbar()}>
          <span>Get Started</span>
          <BsArrowRight />
        </NavLink>
      </div>
      <div className="navbar__group home">
        <NavLink to="/" onClick={() => closeNavbar()}>
          <HiHome />
          <span>Home</span>
        </NavLink>
      </div>
      <div className="navbar__group pricing">
        <NavLink to="/pricing" onClick={() => closeNavbar()}>
          <IoMdPricetag />
          <span>Pricing</span>
        </NavLink>
      </div>
      <div className="navbar__group templates">
        <NavLink to="/website-template" onClick={() => closeNavbar()}>
          <HiTemplate />
          <span>Templates</span>
        </NavLink>
      </div>
      <div className="navbar__group marketing">
        <NavLink to={{ pathname: 'https://marketing.infortts.com' }} target='_blank' onClick={() => closeNavbar()}>
          <FaPeopleCarry />
          <span>Marketing</span>
        </NavLink>
      </div>
      <div className="navbar__group career">
        <NavLink to="/career" onClick={() => closeNavbar()}>
          <FaMoneyBillWave />
          <span>Career With Us</span>
        </NavLink>
      </div>
      <div className="navbar__group mobile_app disabled">
        <NavLink to="/mobileapp" onClick={() => closeNavbar()}>
          <IoPhonePortraitOutline />
          <span>Mobile App (*beta testing)</span>
        </NavLink>
      </div>
      <div className="navbar__group last">
        {!redux.user.loggedIn ? (
          <Button text={"Sign In / Sign Up"} link="/signup" closeNavbar={closeNavbar} />
        ) : (
          <Button text={"Log Out"} onClick={hanldeLogOutClick} closeNavbar={closeNavbar} />
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
export default connect(state => ({ redux: state }), dispatch => ({ dispatch }))(Navbar)