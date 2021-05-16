import React from 'react'
import { Route, } from 'react-router-dom';
import Signup from './app/components/Majors/Signup';
const Home = React.lazy(() => import("./app/components/Majors/Home"));
// const Error404 = React.lazy(() => import('./app/components/Majors/404'));
const Login = React.lazy(() => import('./app/components/Majors/Login'))
function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {/* <Route path="*" component={Error404} /> */}
      {/* <Redirect from="*" to="/" /> */}
    </React.Fragment>
  )
}
export default Routes;