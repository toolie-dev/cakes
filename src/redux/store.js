import { combineReducers, createStore } from "redux";
import authReducer from "./reducers/header-reducer";

let reducers = combineReducers({
    auth: authReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;