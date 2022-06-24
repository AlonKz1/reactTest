import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { teamsReducer } from "./reducers/teamsReducer";
import { appointmentsReducer } from "./reducers/appointmentsReducer"

const rootReducer = combineReducers({
    appointmentsReducer,
    teamsReducer
});
export const store = createStore(rootReducer);