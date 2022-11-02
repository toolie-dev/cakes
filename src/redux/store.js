import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/auth-reducer";
import popupReducer from "./reducers/popup-reducer";


let reducers = combineReducers({
    auth: authReducer,
    popup: popupReducer
});

/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
window.store = store;