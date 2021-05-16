import React from 'react'
import { NavLink } from 'react-router-dom'
import validate from '../../../../helper/validate'
import './Login.scss'
import { FiMail, FiLock } from 'react-icons/fi';
function Login() {
  const [email, setEmail] = React.useState(''),
    [password, setPassword] = React.useState(''),
    [emailError, setEmailError] = React.useState(false),
    [passwordError, setPasswordError] = React.useState(false),
    [score, setScore] = React.useState(0),
    handleSubmit = (e) => {
      e.preventDefault();
      var myHeaders = new Headers().append('Content-Type', 'application/json');
      fetch('http://localhost:5000/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: myHeaders,
      }).then(data => data.json().then(data => console.log(data)))
    },
    handleEmailInputChange = (e) => {
      const localEmail = e.target.value;
      setEmail(localEmail);
      setEmailError(!validate.validateEmail(localEmail) || localEmail === '')
    },
    handlePasswordInputChange = (e) => {
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={`input__group ${emailError ? 'error' : ''}`}>
          <FiMail />
          <input autoFocus={true} type="email" value={email} placeholder="info@infortts.com" required onChange={e => handleEmailInputChange(e)} onBlur={e => handleEmailInputChange(e)} />
        </div>
        <div className={`input__group ${score === 3 ? 'weak' : (score === 2 ? 'medium' : (score === 1 ? 'weak' : (passwordError ? 'error' : '')))}`}>
          <FiLock />
          <input autoFocus={true} type="text" value={password} placeholder="P@sswor#" required onChange={e => handlePasswordInputChange(e)} onBlur={e => handlePasswordInputChange(e)} />
        </div>
        <div className="input__group">
          <input disabled={!(!emailError && !passwordError)} type="submit" value="Submit" />
        </div>
      </form>
      {/* <div>You agree to the Privacy Policy</div> */}
      <div className="hor__line"></div>

    </div >
  )
}
export default Login;