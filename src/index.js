import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/nullstyle.css";
import "./css/title.css";
import "./css/subtitle.css";
import "./css/img.css";
import "./css/btn.css";
import "./css/react-slick.css";
import AppContainer from "./components/App/AppContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
);