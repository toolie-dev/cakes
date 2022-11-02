import s from "./Login.module.css";
import FooterAuth from "../FooterAuth/FooterAuth";
import HeaderAuthContainer from "../HeaderAuth/HeaderAuthContainer";
import CanvasContainer from "../../common/Canvas/CanvasContainer";
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const Login = (props) => {
    return(
        <CanvasContainer isShow={props.isShow}>
            <section className={s.auth}>
                <HeaderAuthContainer title="Вхід" />
                <LoginFormContainer />
                <FooterAuth isRegistration={false} onClick={ () => { props.setTypePopup("auth") } } />
            </section>
        </CanvasContainer>
    )
}

export default Login;