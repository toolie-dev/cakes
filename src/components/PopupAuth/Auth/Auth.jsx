import cookie from "../../../assets/icons/cookie.svg";
import cupcake from "../../../assets/icons/cupcake.svg";

import s from "./Auth.module.css";
import HeaderAuthContainer from "../HeaderAuth/HeaderAuthContainer";
import CanvasContainer from "../../common/Canvas/CanvasContainer";
import Img from "../../common/Img/Img";

const Auth = (props) => {
    return(
        <CanvasContainer isShow={props.isShow}>
            <section className={s.auth}>
                <HeaderAuthContainer title="Реєстрація" />
                <div className={s.main}>
                    <button onClick={ () => { props.setTypePopup("registration"); props.setTypeRegistration("buyer") } } className={s.item}>
                        <div className={s.wrapper}>
                            <Img height={75} src={cookie} alt="cookie" />
                            <div className={s.info}>
                                <h2 className={s.title}>Покупець</h2>
                                <h3 className={s.subtitle}>Хочу купувати, дарувати та їсти</h3>
                            </div>
                        </div>
                        <div className={s.button}>
                            <div className={s.btn}>&rsaquo;</div>
                        </div>
                    </button>
                    <button onClick={ () => { props.setTypePopup("registration"); props.setTypeRegistration("confectioner") } } className={s.item}>
                        <div className={s.wrapper}>
                            <Img height={75} src={cupcake} alt="cookie" />
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
        </CanvasContainer>
    )
}

export default Auth;