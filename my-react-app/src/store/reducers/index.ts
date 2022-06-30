import { combineReducers } from "redux";
import { currentPageReducer } from "./current-pages-reducer";
import { currentDateReleaseReducer } from "./current-date-release-reducer";
import { amountPagesReducer } from "./amount-page-reducer";
import { authorizationReducer } from "./authorization-reducer";

export const rootReducer = combineReducers({
    currentPageReducer,
    currentDateReleaseReducer,
    amountPagesReducer,
    authorizationReducer,
})