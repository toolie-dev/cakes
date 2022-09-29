import s from "./Auth.module.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import cookie from "../../assets/icons/cookie.svg";
import cupcake from "../../assets/icons/cupcake.svg";

const Auth = (props) => {
    return(
        <section className={s.auth}>
            <HeaderAuth title="Реєстрація" closePopup={( ) => { props.toggleAuthState(false) } } />
            <div className={s.main}>
                <div className={s.item}>
                    <div className={s.wrapper}>
                        <div className="img img_75">
                            <img src={cookie} alt="cookie" />
                        </div>
                        <div className={s.info}>
                            <h2 className={s.title}>Покупець</h2>
                            <h3 className={s.subtitle}>Хочу купувати, дарувати та їсти</h3>
                        </div>
                    </div>
                    <div className={s.button}>
                        <div className={s.btn}>&rsaquo;</div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.wrapper}>
                        <div className="img img_75">
                            <img src={cupcake} alt="cookie" />
                        </div>
                        <div className={s.info}>
                            <h2 className={s.title}>Кондитер</h2>
                            <h3 className={s.subtitle}>Хочу випікати, прикрашати та продавати</h3>
                        </div>
                    </div>
                    <div className={s.button}>
                        <div className={s.btn}>&rsaquo;</div>
                    </div>
                </div>
            </div>
            <div className={s.footer}>
                <button className={s.href}>Я вже маю акаунт, хочу просто увійти</button>
            </div>
        </section>
    )
}

export default Auth;