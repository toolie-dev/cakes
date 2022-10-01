import s from "./PopupAuth.module.css"
import Auth from "./Auth/Auth";
import Login from "./Login/Login";
import Registratin from "./Registration/Registration";

const Popup = (props) => {
    switch(props.typePopup){
        case "auth":
            return <Auth setTypePopup={props.setTypePopup} />;
        case "login":
            return <Login setTypePopup={props.setTypePopup} />;
        case "registration":
            return <Registratin setTypePopup={props.setTypePopup} />;
    }
}

const PopupAuth = (props) => {
    return (
        <div onClick={ props.onClickCanvas } className="canvas">
            <section className={s.auth}>
                <Popup {...props} />
            </section>
        </div>
    )
}

export default PopupAuth;