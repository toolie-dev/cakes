import user_brown from "../../../assets/icons/user_brown.svg";

import s from "./WithoutLogin.module.css";
import { NavLink } from "react-router-dom";
import Img from "../../common/Img/Img";
import { ChooseCity } from "../../common/Btn/Btns/Btns";

const WithoutLogin = (props) => {
    return(
        <>
            <div className={s.wrap}>
                <div className={s.item}>
                    <ChooseCity isAllWidth={true} text="Вся Україна" />
                </div>
                <div className={s.item}>
                    <nav className={s.list}>
                        <NavLink to="/desserts" className={s.href}>Десерти</NavLink>
                        <NavLink to="/confectioners" className={s.href}>Кращі кондитери</NavLink>
                        <NavLink to="/articles" className={s.href}>Корисні статті</NavLink>
                    </nav>
                </div>
                <div className={s.item}>
                    <button onClick={ () => { props.setTypePopup("auth") } } className={s.btn}>
                        <Img height={20} src={user_brown} alt="user" />
                        <div className={s.text}>Увійти</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default WithoutLogin;