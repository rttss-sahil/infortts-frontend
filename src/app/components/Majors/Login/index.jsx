import React from 'react'
import { NavLink } from 'react-router-dom'
import validate from '../../../../helper/validate'
import ProgressBar from 'react-bootstrap/ProgressBar'
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
      console.log("sjh");
      setScore(score)
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
        <InputField type="text" value={password} placeholder={"Password"} onChange={e => handlePasswordInputChange(e)} />
      </form>
      <ProgressBar>
        <ProgressBar variant="danger" animated now={score >= 1 ? 33 : 0} key={3} />
        <ProgressBar variant="warning" animated now={score >= 2 ? 34 : 0} key={2} />
        <ProgressBar variant="success" animated now={score >= 3 ? 33 : 0} key={1} />
      </ProgressBar>
      <InputField type="submit" value="Submit" />
    </div >
  )
}
export default Login;