import { useState } from "react";
import App from "./App";

const AppContainer = (props) => {
    const [typePopup, setTypePopup] = useState("");

    const onClickCanvas = (e) => {
        if(e.target.classList.contains("canvas")){
            setTypePopup("");
        }
    }

    return (
        <App {...props} typePopup={typePopup} setTypePopup={setTypePopup} onClickCanvas={onClickCanvas}/>
    );
}

export default AppContainer;
