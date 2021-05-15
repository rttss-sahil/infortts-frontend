import React from 'react'
import { NavLink } from 'react-router-dom'
import validate from '../../../../helper/validate'
// import ProgressBar from 'react-boot'
import './Login.scss'
const InputField = React.lazy(() => import('../../Others/InputField'))
function Login() {
  const [email, setEmail] = React.useState(''),
    [password, SetPassword] = React.useState(''),
    [score, setScore] = React.useState(0),
    handleSubmit = (e) => {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      fetch('http://localhost:5000/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: myHeaders,
      }).then(data => data.json().then(data => console.log(data)))
    },
    handleEmailInputChange = (e) => {
      const email = e.target.value;
      setEmail(email)
    },
    handlePasswordInputChange = (e) => {
      const password = e.target.value;
      SetPassword(password);
      const score = validate.scorePassword(password);
      setScore(score);
    }
  return (
    <div className="container">
      <div className="signup">Log In</div>
      <div className="signup">
        <span>Don't have an account?</span>
        <NavLink to="/login">Sign Up</NavLink>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputField autofocus={true} type="email" value={email} placeholder={"Email"} required onChange={e => handleEmailInputChange(e)} />
        <InputField type="password" value={password} placeholder={"Password"} onChange={e => handlePasswordInputChange(e)} />
        <progress className="password__score" min={0} max={3} value={score} />
        <InputField type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default Login;