import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import articlesReducer from "./reducers/articles-reducer";
import authReducer from "./reducers/auth-reducer";
import confectionersReducer from "./reducers/confectioners-reducer";
import dessertsReducer from "./reducers/desserts-reducer";
import popupReducer from "./reducers/popup-reducer";


let reducers = combineReducers({
    auth: authReducer,
    popup: popupReducer,
    desserts: dessertsReducer,
    confectioners: confectionersReducer,
    articles: articlesReducer
});

/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
window.store = store;