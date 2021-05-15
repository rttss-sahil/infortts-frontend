import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.scss'
const InputField = React.lazy(() => import('../../Others/InputField'))
function Login() {
  const [email, setEmail] = React.useState(''),
    [password, SetPassword] = React.useState(''),
    handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:5000/login', {
        body: { email, password }, method: "post",
        headers: {
          // 'Access-Control-Allow-Origin': '*'
        }
      })
      console.log(email, password)
    },
    handleEmailInputChange = (e) => {
      const email = e.target.value;
      setEmail(email)
    },
    handlePasswordInputChange = (e) => {
      const password = e.target.value;
      SetPassword(password)
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
        <InputField type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default Login;