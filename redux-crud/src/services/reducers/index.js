import { combineReducers } from "redux";
import { employeeReducer } from "./employee.reducer"
import { productReducer } from "./productReducer";
const rootReducer = combineReducers({
    employeeReducer,
    productReducer

});

export default rootReducer;