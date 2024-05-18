import { combineReducers } from "redux";
import taskReducer from "./reducer";

const rootReducer = combineReducers({
    task : taskReducer
})

export default rootReducer;