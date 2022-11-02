import s from "./FooterAuth.module.css";
import facebook from "../../../assets/icons/facebook.svg";
import google from "../../../assets/icons/google.svg";
import { LoginUsingSocialNetwork } from "../../common/Btn/Btns/Btns";

const FooterAuth = (props) => {
    return(
        <div className={s.footer}>
            <h2 className={s.title}>{props.isRegistration ? "Зареєструватися" : "Увійти"} за допомогою</h2>
            <div className={s.btns}>
                <LoginUsingSocialNetwork img={facebook} text="Facebook" />
                <LoginUsingSocialNetwork img={google} text="Google" />
            </div> 
            <button onClick={ props.onClick } className={s.href}>{props.isRegistration ? "Я вже маю акаунт, хочу просто увійти" : "У мене немає акаунту, треба зареєструватися"}</button>
        </div>
    )
}

export default FooterAuth;