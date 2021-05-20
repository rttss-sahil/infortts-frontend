import actionTypes from "../actions/actionTypes";

const initialState =
  window.localStorage.getItem('loggedIn') === 'true' ? ({
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
  let newState;
  switch (action.type) {
    case actionTypes.logUserIn:
      if (action.payload) {
        window.localStorage.setItem('loggedIn', 'true')
        for (const item in action.payload) {
          if (item === 'username' || item === 'email') {
            window.localStorage.setItem(item, action.payload[item])
          }
        }
        console.log('Login data successfully saved!!')
        newState = {
          ...state,
          loggedIn: true,
          user: action.payload
        }
      } else {
        newState = {
          ...state,
          loggedIn: false,
          user: null
        }
      }
      console.log('new-USER-state: ', newState)
      return newState;

    // eslint-disable-next-line no-fallthrough
    case actionTypes.logUserOut:
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('email')
      window.localStorage.setItem('loggedIn', 'false')
      console.log('User successfully logged out');
      newState = {
        ...state,
        loggedIn: false,
        user: null
      }
      console.log('new-USER-state: ', newState)
      return newState;

    default:
      newState = state;
      console.log('USER-state: ', newState)
      return newState;
  }
}




export default Users;