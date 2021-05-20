import { combineReducers, createStore } from "redux";
import Modals from "./reducers/modals";
import Users from "./reducers/users";
import Cookies from "./reducers/cookies";


const store = createStore(combineReducers({ user: Users, modal: Modals, cookie: Cookies }))


export default store;