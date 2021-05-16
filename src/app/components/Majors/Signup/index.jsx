import React from 'react'
import { NavLink } from 'react-router-dom'
import validate from '../../../../helper/validate'
import './Signup.scss'
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
function Signup() {
  const [email, setEmail] = React.useState(''),
    [username, setUsername] = React.useState(''),
    [password, setPassword] = React.useState(''),
    [emailError, setEmailError] = React.useState(false),
    [usernameError, setUsernameError] = React.useState(false),
    [passwordError, setPasswordError] = React.useState(false),
    [score, setScore] = React.useState(0),
    handleSubmit = (e) => {
      e.preventDefault();
      var myHeaders = new Headers().append('Content-Type', 'application/json');
      fetch('http://localhost:5000/register', {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: myHeaders,
      }).then(data => data.json().then(data => console.log(data)))
    },
    handleUsernameInputChange = (e) => {
      const localUsername = e.target.value;
      setUsername(localUsername)
      setUsernameError(!validate.validateUsername(localUsername) || localUsername === '');
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
    <div className="container register">
      <div className="register__top">
        <p className="top__text">Sign Up</p>
        <div className="top__link">
          <span>Already have an account?</span>{" "}
          <NavLink to="/login">Log In</NavLink>
        </div>
      </div>
      <div className="hor__line"></div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={`input__group ${usernameError ? 'error' : ''}`}>
          <FiUser />
          <input autoFocus={true} type="text" value={username} placeholder="John Doe" required onChange={e => handleUsernameInputChange(e)} onBlur={e => handleUsernameInputChange(e)} />
        </div>
        <div className={`input__group ${emailError ? 'error' : ''}`}>
          <FiMail />
          <input autoFocus={true} type="email" value={email} placeholder="info@infortts.com" required onChange={e => handleEmailInputChange(e)} onBlur={e => handleEmailInputChange(e)} />
        </div>
        <div className={`input__group ${score === 3 ? 'weak' : (score === 2 ? 'medium' : (score === 1 ? 'weak' : (passwordError ? 'error' : '')))}`}>
          <FiLock />
          <input autoFocus={true} type="text" value={password} placeholder="P@sswor#" required onChange={e => handlePasswordInputChange(e)} onBlur={e => handlePasswordInputChange(e)} />
        </div>
        <div className="input__group">
          <input disabled={!(!usernameError && !emailError && !passwordError)} type="submit" value="Submit" />
        </div>
      </form>
      <div>You agree to the Privacy Policy</div>
      <div className="hor__line"></div>

    </div >
  )
}
export default Signup;