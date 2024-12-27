import { combineReducers } from "redux";
import { employeeReducer } from "./employee.reducer"
const rootReducer = combineReducers({
    employeeReducer,

});

export default rootReducer;