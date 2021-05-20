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
  }),

  allowCookies: (payload) => ({
    type: actionTypes.allowCookies,
    payload
  }),
  removeCookies: () => ({
    type: actionTypes.removeCookies
  })
}


export default actions;