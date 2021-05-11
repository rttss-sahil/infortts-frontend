import actionTypes from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  user: null
}


const Users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.logUserIn:
      return successfulLogin ? {
        ...state,
        loggedIn: true,
        user: {
          email: "sah@rat.com",
          password: "12345678"
        }
      } : {
        ...state,
        loggedIn: false,
        user: null
      }

    case actionTypes.logUserOut:
      return {
        ...state,
        loggedIn: false,
        user: null
      }

    default:
      return state;
  }
}


const successfulLogin = () => {
  return true;
}


export default Users;