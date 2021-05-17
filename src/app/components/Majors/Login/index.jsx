import React from 'react'
import { NavLink } from 'react-router-dom'
import validate from '../../../../helper/validate'
import './Login.scss'
import { FiMail, FiLock } from 'react-icons/fi';
import { connect } from 'react-redux';
import actions from '../../../store/actions/actions';
import configs from '../../../../configs';
function Login({ dispatch }) {
  const [email, setEmail] = React.useState(''),
    [password, setPassword] = React.useState(''),
    [emailError, setEmailError] = React.useState(false),
    [passwordError, setPasswordError] = React.useState(false),
    [score, setScore] = React.useState(0),
    { handleSubmit, handleEmailInputChange, handlePasswordInputChange } = helpingFunction;
  return (
    <div className="container login">
      <div className="register__top">
        <p className="top__text">Log In</p>
        <div className="top__link">
          <span>Don't have an account?</span>{" "}
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
      <div className="hor__line"></div>
      <form onSubmit={(e) => handleSubmit(e, email, password, dispatch)}>
        <div className={`input__group ${emailError ? 'error' : ''}`}>
          <FiMail />
          <input
            // autoFocus={true}
            type="email"
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
          <input disabled={emailError || passwordError || score === 0} type="submit" value="Submit" />
        </div>
      </form>
      <div>Forgot Password? {' '}
        <NavLink to="/reset-password">Reset here</NavLink>
      </div>
      <div className="hor__line"></div>

    </div >
  )
}
const helpingFunction = {
  handleSubmit: (e, email, password, dispatch) => {
    e.preventDefault();
    fetch(configs.BACKEND_URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then(data => data.json().then(data => {
      dispatch(actions.logUserIn(data.user))
    }))
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
export default connect(state => ({ redux: state }), dispatch => ({ dispatch }))(Login);