import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";

export const mainReducers = combineReducers({
    userReducer,
    authReducer
})

