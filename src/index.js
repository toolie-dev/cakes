import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "./nullstyle.css";
import AppContainer from "./components/App/AppContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
);