import s from "./Registration.module.css"
import Canvas from "../../common/Canvas/Canvas";
import FooterAuth from "../FooterAuth/FooterAuth";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const Registratin = (props) => {
    return(
        <Canvas isShow={props.isShow} timeout={1000} onClickCanvas={props.onClickCanvas}>
            <section className={s.auth}>
                <HeaderAuth title="Реєстрація" setTypePopup={props.setTypePopup} />
                <RegistrationForm setTypePopup={props.setTypePopup} typeRegistration={props.typeRegistration} />
                <FooterAuth isRegistration={true} onClick={ () => { props.setTypePopup("login") } } />
            </section>
        </Canvas>
    )
}

export default Registratin;