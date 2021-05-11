import actionTypes from "./actionTypes";

const actions = {
  logUserIn: (payload) => ({
    type: actionTypes.logUserIn,
    payload
  }),
  logUserOut: (payload) => ({
    type: actionTypes.logUserOut,
    payload
  })
}


export default actions;