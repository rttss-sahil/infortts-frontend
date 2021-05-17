import React from 'react'
// eslint-disable-next-line
import { Route, Redirect } from 'react-router-dom';
const Signup = React.lazy(() => import('./app/components/Majors/Signup'));
const LogOut = React.lazy(() => import('./app/components/Minors/LogOut'));
const Home = React.lazy(() => import("./app/components/Majors/Home"));
// eslint-disable-next-line
const Error404 = React.lazy(() => import('./app/components/Majors/404'));
const Login = React.lazy(() => import('./app/components/Majors/Login'))
function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={LogOut} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="not-found" component={Error404} />
      {/* <Route path="*" component={Error404} /> */}
      {/* <Redirect from="*" to="/not-found" /> */}
    </React.Fragment>
  )
}
export default Routes;