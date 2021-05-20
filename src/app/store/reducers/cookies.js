import actionTypes from "../actions/actionTypes";

const initialState = window.localStorage.getItem('cookiesAllowed') === 'true' ? {
  cookiesAllowed: true,
  cookies: window.localStorage.getItem('cookies') || []
} : {
  cookiesAllowed: false,
  cookies: []
}


const Cookies = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.allowCookies:
      window.sessionStorage.setItem(action.payload.setItem('cookiesAllowed'), 'true')
      if (action.payload) {
        if (action.payload.cookies) {
          for (let item of action.payload.cookies) {
            window.sessionStorage.setItem(item, action.payload.cookies[item])
          }
        }
      }
      newState = {
        ...state,
        cookies: action.payload
      }
      console.log('new-COOKIE-state: ', newState)
      return newState

    case actionTypes.removeCookies:
      window.localStorage.removeItem('cookiesAllowed')
      newState = {
        ...state,
        cookiesAllowed: false,
        cookies: []
      }
      console.log('new-COOKIE-state: ', newState)
      return newState;

    default:
      console.log('COOKIE-state: ', state)
      return state;
  }
}


export default Cookies;