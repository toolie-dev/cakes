import s from "./FooterAuth.module.css";
import facebook from "../../../assets/icons/facebook.svg";
import google from "../../../assets/icons/google.svg";

const FooterAuth = (props) => {
    return(
        <div className={s.footer}>
            <h2 className={s.title}>{props.isRegistration ? "Зареєструватися" : "Увійти"} за допомогою</h2>
            <div className={s.btns}>
                <button className={s.btn}>
                    <div className="img img_20">
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className={s.text}>Facebook</div>
                </button>
                <button className={s.btn}>
                    <div className="img img_20">
                        <img src={google} alt="google" />
                    </div>
                    <div className={s.text}>Google</div>
                </button>
            </div> 
            <button onClick={ props.onClick } className={s.href}>{props.isRegistration ? "Я вже маю акаунт, хочу просто увійти" : "У мене немає акаунту, треба зареєструватися"}</button>
        </div>
    )
}

export default FooterAuth;