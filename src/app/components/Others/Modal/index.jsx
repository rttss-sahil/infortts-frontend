import React from 'react'
import { connect } from 'react-redux';
import actions from '../../../store/actions/actions'
import './Modal.scss'
const Button = React.lazy(() => import('../Button'));
function Modal({ redux, dispatch }) {
  const { showModal, message, buttonText, link } = redux.modal;
  const closeModal = () => {
    dispatch(actions.hideModal())
  }
  return (
    <div className={`backdrop${showModal ? ' open' : ''}`}>
      <main>
        <div className="message">
          {message || 'Something went wrong. Plesae try again.'}
        </div>
        {redux.modal.link ? (
          <Button link={link || '/'} closeModal={closeModal} text={buttonText || 'Back To Home'} />
        ) : (
          <Button closeModal={closeModal} text={buttonText || 'OK'} />
        )}
      </main>
    </div>
  )
}
export default connect(state => ({ redux: state }), dispatch => ({ dispatch }))(Modal);