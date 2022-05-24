import { combineReducers } from "redux";
import authReducer from "./authDock";

export default combineReducers({
  auth: authReducer,
})