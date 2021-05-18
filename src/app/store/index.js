import { combineReducers, createStore } from "redux";
import Modals from "./reducers/modals";
import Users from "./reducers/users";



const store = createStore(combineReducers({ user: Users, modal: Modals }))


export default store;