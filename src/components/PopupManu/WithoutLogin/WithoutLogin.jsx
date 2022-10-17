import user_brown from "../../../assets/icons/user_brown.svg";
import location from "../../../assets/icons/location.svg";

import s from "./WithoutLogin.module.css";
import { NavLink } from "react-router-dom";

const WithoutLogin = (props) => {
    return(
        <>
            <div className={s.wrap}>
                <div className={s.item}>
                    <button className={s.button}>
                        <div className="img img_20">
                            <img src={location} alt="location" />
                        </div>
                        <div className={s.text}>Вся Україна</div>
                    </button>
                </div>
                <div className={s.item}>
                    <nav className={s.list}>
                        <NavLink to="/" className={s.href} href="#">Десерти</NavLink>
                        <NavLink to="/" className={s.href} href="#">Кращі кондитери</NavLink>
                        <NavLink to="/" className={s.href} href="#">Корисні статті</NavLink>
                    </nav>
                </div>
                <div className={s.item}>
                    <button className={s.btn}>
                        <div className="img img_20">
                            <img src={user_brown} alt="user" />
                        </div>
                        <div className={s.text}>Увійти</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default WithoutLogin;