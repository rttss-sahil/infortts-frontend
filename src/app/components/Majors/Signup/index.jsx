import React from 'react'
import { NavLink } from 'react-router-dom'
import validate from '../../../../helper/validate'
import './Signup.scss'
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { connect } from 'react-redux';
import actions from '../../../store/actions/actions'
import Fetch from '../../../../helper/fetch/users';
function Signup({ dispatch }) {
  const [email, setEmail] = React.useState(''),
    [username, setUsername] = React.useState(''),
    [password, setPassword] = React.useState(''),
    [emailError, setEmailError] = React.useState(false),
    [usernameError, setUsernameError] = React.useState(false),
    [passwordError, setPasswordError] = React.useState(false),
    [score, setScore] = React.useState(0),
    { handleSubmit, handleEmailInputChange, handleUsernameInputChange, handlePasswordInputChange } = helpingFunction;
  return (
    <div className="container register">
      <div className="register__top">
        <p className="top__text">Sign Up</p>
        <div className="top__link">
          <span>Already have an account?</span>{" "}
          <NavLink to="/login">Log In</NavLink>
        </div>
      </div>
      <div className="hor__line"></div>
      <form onSubmit={(e) => handleSubmit(e, username, email, password, dispatch)}>
        <div className={`input__group ${usernameError ? 'error' : ''}`}>
          <FiUser />
          <input
            autoFocus={true}
            type="text"
            value={username}
            placeholder="John Doe"
            required
            onChange={e => handleUsernameInputChange(e, setUsername, setUsernameError)}
          // onBlur={e => handleUsernameInputChange(e, setUsername, setUsernameError)}
          />
        </div>
        <div className={`input__group ${emailError ? 'error' : ''}`}>
          <FiMail />
          <input
            // autoFocus={true}
            type="email"
            // autoComplete
            value={email}
            placeholder="info@infortts.com"
            required
            onChange={e => handleEmailInputChange(e, setEmail, setEmailError)}
          // onBlur={e => handleEmailInputChange(e, setEmail, setEmailError)}
          />
        </div>
        <div className={`input__group ${score === 3 ? 'weak' : (score === 2 ? 'medium' : (score === 1 ? 'weak' : (passwordError ? 'error' : '')))}`}>
          <FiLock />
          <input
            // autoFocus={true}
            type="text"
            value={password}
            placeholder="P@sswor#"
            required
            onChange={e => handlePasswordInputChange(e, setPassword, setPasswordError, setScore)}
          // onBlur={e => handlePasswordInputChange(e, setPassword, setPasswordError, setScore)}
          />
        </div>
        <div className="input__group">
          <input
            onClick={(e) => handleSubmit(e, username, email, password, dispatch)}
            // disabled={usernameError || emailError || passwordError || score === 0}
            type="submit"
            value="Submit" />
        </div>
      </form>
      <div>By signing up, you agree to the {' '}
        <NavLink to="/terms-of-use">Terms of Use</NavLink>
        {' & '}
        <NavLink to="privacy-policy">Privacy Policy</NavLink>{' .'}
      </div>
      <div className="hor__line"></div>
    </div >
  )
}
const helpingFunction = {
  handleSubmit: async (e, username, email, password, dispatch) => {
    e.preventDefault();
    const data = await Fetch.fetchRegister(username, email, password);
    if (data) {
      console.log('data', data)
      if (data.user) {
        dispatch(actions.logUserIn(data.user))
        dispatch(actions.showModal({
          message: 'Welcome, ' + data.user.username,
          link: '/',
          buttonText: 'Back To Home'
        }))
      } else {
        dispatch(actions.showModal({
          message: data.message,
          buttonText: 'OK'
        }))
      }
    }
  },
  handleUsernameInputChange: (e, setUsername, setUsernameError) => {
    const localUsername = e.target.value;
    setUsername(localUsername)
    setUsernameError(!validate.validateUsername(localUsername) || localUsername === '');
  },
  handleEmailInputChange: (e, setEmail, setEmailError) => {
    const localEmail = e.target.value;
    setEmail(localEmail);
    setEmailError(!validate.validateEmail(localEmail) || localEmail === '')
  },
  handlePasswordInputChange: (e, setPassword, setPasswordError, setScore) => {
    const localPassword = e.target.value;
    setPassword(localPassword);
    if (localPassword === '') {
      setScore(0)
      setPasswordError(true)
    } else {
      const score = validate.scorePassword(localPassword);
      setScore(score)
      setPasswordError(score < 1)
    }
  }
}
export default connect(state => ({ redux: state }), dispatch => ({ dispatch }))(Signup);