import s from "./Login.module.css";
import FooterAuth from "../FooterAuth/FooterAuth";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Canvas from "../../common/Canvas/Canvas";
import LoginForm from "./LoginForm/LoginForm";

//Input
const Login = (props) => {
    return(
        <Canvas isShow={props.isShow} timeout={1000} onClickCanvas={props.onClickCanvas}>
            <section className={s.auth}>
                <HeaderAuth title="Вхід" setTypePopup={props.setTypePopup} />
                <LoginForm setTypePopup={props.setTypePopup} />
                <FooterAuth isRegistration={false} onClick={ () => { props.setTypePopup("auth") } } />
            </section>
        </Canvas>
    )
}

export default Login;