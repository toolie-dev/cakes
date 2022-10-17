import { useState } from "react";
import App from "./App";

const AppContainer = (props) => {
    const [typePopup, setTypePopup] = useState("auth");

    const onClickCanvas = (e) => {
        if(e.target.classList.contains("canvas")){
            console.log(1);
            setTypePopup("");
        }
    }

    return (
        <App {...props} typePopup={typePopup} setTypePopup={setTypePopup} onClickCanvas={onClickCanvas}/>
    );
}

export default AppContainer;
