import React from 'react'
import { connect } from 'react-redux'
import actions from '../../../store/actions/actions'
import './LogOut.scss'
const Button = React.lazy(() => import('../../Others/Button'))
function LogOut({ redux, dispatch }) {
  React.useEffect(() => {
    if (redux.user.loggedIn) {
      dispatch(actions.logUserOut())
    }
  })
  return (
    <div className="container">
      <div className="logout__message">You have been successfully logged out.</div>
      <Button link={'/'} text={'Back To Home'} />
    </div>
  )
}
export default connect((state) => ({ redux: state }), dispatch => ({ dispatch }))(LogOut)