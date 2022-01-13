import { combineReducers } from "redux";
import employeeReducers from "./employee-reducer"

const rootReducer = combineReducers({
    employeeState:employeeReducers,
    //Add more reducers

})

export default rootReducer;