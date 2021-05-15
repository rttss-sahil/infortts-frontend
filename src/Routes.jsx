import React from 'react'
import { Route } from 'react-router-dom';
const Home = React.lazy(() => import("./app/components/Majors/Home"));
const Error404 = React.lazy(() => import('./app/components/Majors/404'));
const Login = React.lazy(() => import('./app/components/Majors/Login'))
function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route path="/:page" component={Error404} />
    </React.Fragment>
  )
}

export default Routes
