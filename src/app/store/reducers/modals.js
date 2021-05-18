import actionTypes from "../actions/actionTypes";

const initialState = {
  showModal: false,
  message: 'Something went wrong. Please try again.',
  buttonText: 'OK',
  link: undefined
}


const Modals = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.showModal:
      const { message, buttonText, link } = action.payload;
      newState = message && {
        ...state,
        showModal: true,
        message
      }
      newState = buttonText && {
        ...newState,
        buttonText
      }
      newState = Boolean(link) ? { ...newState, link } : { ...newState, link: undefined }
      // console.log('new-state: ', newState)
      return newState;

    case actionTypes.hideModal:
      console.log('here')
      newState = {
        ...state,
        showModal: false
      }
      // console.log('new-state: ', newState)
      return newState;

    default:
      // console.log('state: ', state)
      return state;
  }
}




export default Modals;