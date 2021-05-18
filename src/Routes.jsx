import React from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { Route, Redirect } from 'react-router-dom';
const Signup = React.lazy(() => import('./app/components/Majors/Signup'));
const Home = React.lazy(() => import("./app/components/Majors/Home"));
// eslint-disable-next-line
const Error404 = React.lazy(() => import('./app/components/Majors/404'));
const Login = React.lazy(() => import('./app/components/Majors/Login'))
function Routes({ redux }) {
  // console.log(redux)
  return (
    <React.Fragment>
      {redux.user.loggedIn ? (
        <Redirect push to="/" />
      ) : (
        <Route exact path="/login" component={Login} />
      )}
      <Route exact path="/signup" component={Signup} />
      <Route exact path="not-found" component={Error404} />
      <Route exact path="/" component={Home} />
      <Route path="/not-found" component={Error404} />
      {/* <Redirect from="*" to="/not-found" /> */}
    </React.Fragment>
  )
}

export default connect((state) => ({ redux: state }))(Routes);