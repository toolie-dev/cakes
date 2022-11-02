import s from "./Registration.module.css"
import CanvasContainer from "../../common/Canvas/CanvasContainer";
import FooterAuth from "../FooterAuth/FooterAuth";
import RegistrationFormContainer from "./RegistrationForm/RegistrationFormContainer";
import HeaderAuthContainer from "../HeaderAuth/HeaderAuthContainer";

const Registratin = (props) => {
    return(
        <CanvasContainer isShow={props.isShow}>
            <section className={s.auth}>
                <HeaderAuthContainer title="Реєстрація" />
                <RegistrationFormContainer typeRegistration={props.typeRegistration} />
                <FooterAuth isRegistration={true} onClick={ () => { props.setTypePopup("login") } } />
            </section>
        </CanvasContainer>
    )
}

export default Registratin;