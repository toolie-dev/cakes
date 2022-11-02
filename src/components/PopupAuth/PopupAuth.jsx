import { useState } from "react";
import AuthContainer from "./Auth/AuthContainer";
import LoginContainer from "./Login/LoginContainer";
import LoginCode from "./Login/LoginCode/LoginCode";
import RegistratinContainer from "./Registration/RegistrationContainer";
import RegistratinCode from "./Registration/RegistrationCode/RegistrationCode";

const PopupAuth = (props) => {
    const [typeRegistration, setTypeRegistration] = useState(null);
    return (
        <>
            <AuthContainer isShow={props.typePopup === "auth"}  setTypeRegistration={setTypeRegistration} />
            <LoginContainer isShow={props.typePopup === "login"} />
            <LoginCode isShow={props.typePopup === "login-code"} />
            <RegistratinContainer isShow={props.typePopup === "registration"}   typeRegistration={typeRegistration} />
            <RegistratinCode isShow={props.typePopup === "registration-code"} />
        </>
    )
}

export default PopupAuth;