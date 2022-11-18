import message_brown from "../../../assets/icons/message_brown.svg";
import user from "../../../assets/icons/user_grey.svg";
import logout from "../../../assets/icons/logout.svg";
import arrow from "../../../assets/icons/arrow/arrow_right.svg";
import location from "../../../assets/icons/location.svg";

import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import Img from "../../common/Img/Img";
import classNames from "classnames";

const Menu = (props) => {
    return(
        <>
            <div className={s.wrap}>
                <div className={s.item}>
                    <button className={s.button}>
                        <Img height={20} src={location} alt="location" />
                        <div className={s.text}>Вся Україна</div>
                    </button>
                </div>
                <div className={s.item}>
                    <nav className={s.list}>
                        <NavLink to="/" className={s.href}>Десерти</NavLink>
                        <NavLink to="/" className={s.href}>Кращі кондитери</NavLink>
                        <NavLink to="/" className={s.href}>Корисні статті</NavLink>
                    </nav>
                </div>
            </div>
            <div className={s.wrap}>
                <div className={s.item}>
                    <div className={s.list}>
                        <NavLink to="/user" className={s.user}>
                            <Img height={20} src={user} alt="user" />
                            <div className={s.name}>Інна Пономаренко</div>
                        </NavLink>
                        <button className={classNames(s.btn, s.btnBrown)}>
                            <Img height={20} src={message_brown} alt="user" />
                            <div className={s.text}>Чат</div>
                        </button>
                    </div>
                </div>
                <div className={s.item}>
                    <nav className={s.list}>
                        <NavLink to="/" className={s.href}>Мої заявки</NavLink>
                        <NavLink to="/" className={s.href}>Збережені шаблони</NavLink>
                    </nav>
                </div>
                <div className={s.item}>
                    <div className={s.footer}>
                        <NavLink className={s.link} to="/">
                            <div className={s.text}>Кабінет кондитера</div>
                            <Img height={15} src={arrow} alt="arrow" />
                        </NavLink>
                        <button className={s.btn}>
                            <div className={s.text}>Вийти</div>
                            <Img height={15} src={logout} alt="logout" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;