import location from "../../../assets/icons/location.svg";
import message_brown from "../../../assets/icons/message_brown.svg";
import user from "../../../assets/icons/user_grey.svg";
import logout from "../../../assets/icons/logout.svg";

import s from "./UsersMenu.module.css";
import { NavLink } from "react-router-dom";

const UsersMenu = (props) => {
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
            </div>
            <div className={s.wrap}>
                <div className={s.item}>
                    <div className={s.list}>
                        <NavLink to="/user" className={s.user}>
                            <div className="img img_20">
                                <img src={user} alt="user" />
                            </div>
                            <div className={s.name}>Інна Пономаренко</div>
                        </NavLink>
                        <button className={`${s.btn} ${s.btnBrown}`}>
                            <div className="img img_20">
                                <img src={message_brown} alt="user" />
                            </div>
                            <div className={s.text}>Чат</div>
                        </button>
                    </div>
                </div>
                <div className={s.item}>
                    <nav className={s.list}>
                        <NavLink to="/" className={s.href} href="#">Мої заявки</NavLink>
                        <NavLink to="/" className={s.href} href="#">Збережені шаблони</NavLink>
                    </nav>
                </div>
                <div className={s.item}>
                    <button className={s.btn}>
                        <div className={s.text}>Вийти</div>
                        <div className="img img_15">
                            <img src={logout} alt="logout" />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default UsersMenu;