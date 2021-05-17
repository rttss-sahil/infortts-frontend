import actionTypes from "../actions/actionTypes";

const initialState =
  window.localStorage.getItem('username') ? ({
    loggedIn: true,
    user: {
      username: window.localStorage.getItem('username'),
      email: window.localStorage.getItem('email'),
    }
  }) : ({
    loggedIn: false,
    user: null,
  })


const Users = (state = initialState, action) => {
  // console.log('state: ', state)
  switch (action.type) {
    case actionTypes.logUserIn:
      if (action.payload) {
        for (const item in action.payload) {
          window.localStorage.setItem(item, action.payload[item])
        }
        console.log('Login data successfully saved!!')
        return {
          ...state,
          loggedIn: true,
          user: action.payload
        }
      } else {
        return {
          ...state,
          loggedIn: false,
          user: null
        }
      }

    // eslint-disable-next-line no-fallthrough
    case actionTypes.logUserOut:
      console.log('User successfully logged out');
      return {
        ...state,
        loggedIn: false,
        user: null
      }

    default:
      return state;
  }
}




export default Users;