import { combineReducers } from "redux";
import { currentPageReducer } from "./currentPageReducer";

export const rootReducer = combineReducers({
    currentPageReducer,
})