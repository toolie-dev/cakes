//import s from "./PopupAuth.module.css";
import Auth from "./Auth/Auth";
import Login from "./Login/Login";
import Registratin from "./Registration/Registration";

const PopupAuth = (props) => {
    return (
        <>
            <Auth isShow={props.typePopup === "auth"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
            <Login isShow={props.typePopup === "login"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
            <Registratin isShow={props.typePopup === "registration"} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
        </>
    )
}

export default PopupAuth;