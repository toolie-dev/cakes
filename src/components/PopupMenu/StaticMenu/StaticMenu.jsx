import message_brown from "../../../assets/icons/message_brown.svg";
import user from "../../../assets/icons/user_grey.svg";
import logout from "../../../assets/icons/logout.svg";
import arrow from "../../../assets/icons/arrow/arrow_right.svg";
import plus from "../../../assets/icons/plus_red.svg";

import s from "./StaticMenu.module.css";
import { NavLink } from "react-router-dom";

const StaticMenu = (props) => {
    return(
        <>
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
                    <nav className={s.nav}>
                        <NavLink className={s.href}>Інформація</NavLink>
                        <NavLink className={s.href}>Заявки</NavLink>
                        <NavLink className={s.href}>Відгуки</NavLink>
                    </nav>
                </div>
                <div className={s.item}>
                    <ol className={s.categories}>
                        <li>
                            <NavLink className={`${s.btn} ${s.btnRed}`}>Торти</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${s.btn} ${s.btnTransparent}`}>Торти</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${s.btn} ${s.btnTransparent}`}>Макаруни</NavLink>
                        </li>
                    </ol>
                    <button className={s.button}>
                        <div className="img img_20">
                            <img src={plus} alt="plus" />
                        </div>
                        <div className={s.text}>Додати категорію</div>
                    </button>
                </div>
                <div className={s.item}>
                    <div className={s.footer}>
                        <NavLink className={s.link} to="/">
                            <div className={s.text}>Кабінет кондитера</div>
                            <div className="img img_15">
                                <img src={arrow} alt="arrow" />
                            </div>
                        </NavLink>
                        <button className={s.btn}>
                            <div className={s.text}>Вийти</div>
                            <div className="img img_15">
                                <img src={logout} alt="logout" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaticMenu;