import { useState } from "react";
import Auth from "./Auth/Auth";
import Login from "./Login/Login";
import LoginCode from "./Login/LoginCode/LoginCode";
import Registratin from "./Registration/Registration";
import RegistratinCode from "./Registration/RegistrationCode/RegistrationCode";

const PopupAuth = (props) => {
    const [typeRegistration, setTypeRegistration] = useState(null);
    return (
        <>
            <Auth isShow={props.typePopup === "auth"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas}   setTypeRegistration={setTypeRegistration} />
            <Login isShow={props.typePopup === "login"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
            <LoginCode isShow={props.typePopup === "login-code"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
            <Registratin isShow={props.typePopup === "registration"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas}   typeRegistration={typeRegistration} />
            <RegistratinCode isShow={props.typePopup === "registration-code"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
        </>
    )
}

export default PopupAuth;