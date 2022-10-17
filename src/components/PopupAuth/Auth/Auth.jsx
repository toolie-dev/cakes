import s from "./Auth.module.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import cookie from "../../../assets/icons/cookie.svg";
import cupcake from "../../../assets/icons/cupcake.svg";
import Canvas from "../../common/Canvas/Canvas";

const Auth = (props) => {
    return(
        <Canvas isShow={props.isShow} timeout={1000} onClickCanvas={props.onClickCanvas}>
            <section className={s.auth}>
                <HeaderAuth title="Реєстрація" setTypePopup={props.setTypePopup} />
                <div className={s.main}>
                    <button onClick={ () => { props.setTypePopup("registration") } } className={s.item}>
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
                    </button>
                    <button onClick={ () => { props.setTypePopup("registration") } } className={s.item}>
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
                    </button>
                </div>
                <button onClick={ () => { props.setTypePopup("login") } } className={s.href}>Я вже маю акаунт, хочу просто увійти</button>
            </section>
        </Canvas>
    )
}

export default Auth;