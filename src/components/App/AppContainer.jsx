import { useState } from "react";
import App from "./App";

const AppContainer = (props) => {
    const [isShowAuth, toggleAuthState] = useState(false);

    const onClickCanvas = (e) => {
        if(e.target.classList.contains("canvas")){
            toggleAuthState(false);
        }
    }

    return (
        <App {...props} isShowAuth={isShowAuth} toggleAuthState={toggleAuthState} onClickCanvas={onClickCanvas}/>
    );
}

export default AppContainer;
