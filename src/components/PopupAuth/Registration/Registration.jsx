//import s from "./Registration.module.css"

import FooterAuth from "../FooterAuth/FooterAuth";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

const Registratin = (props) => {
    return(
        <>
            <HeaderAuth title="Реєстрація" setTypePopup={props.setTypePopup} />
            <FooterAuth isRegistration={true} onClick={ () => { props.setTypePopup("login") } } />
        </>
    )
}

export default Registratin;