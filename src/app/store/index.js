import { combineReducers, createStore } from "redux";
import Users from "./reducers/user";



const store = createStore(combineReducers({ user: Users }))


export default store;