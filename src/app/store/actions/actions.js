import actionTypes from "./actionTypes";

const actions = {
  logUserIn: (payload) => ({
    type: actionTypes.logUserIn,
    payload
  }),
  logUserOut: (payload) => ({
    type: actionTypes.logUserOut,
    payload
  }),

  showModal: (payload) => ({
    type: actionTypes.showModal,
    payload
  }),
  hideModal: () => ({
    type: actionTypes.hideModal
  })
}


export default actions;