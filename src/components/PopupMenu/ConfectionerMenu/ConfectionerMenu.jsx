import message_brown from "../../../assets/icons/message_brown.svg";
import user from "../../../assets/icons/user_grey.svg";
import logout from "../../../assets/icons/logout.svg";
import arrow from "../../../assets/icons/arrow/arrow_right.svg";
import plus from "../../../assets/icons/plus_red.svg";

import s from "./ConfectionerMenu.module.css";
import { NavLink } from "react-router-dom";
import Img from "../../common/Img/Img";
import classNames from "classnames";
import Btn from "../../common/Btn/Btn";

const ConfectionerMenu = (props) => {
    return(
        <>
            <div className={s.wrap}>
                <div className={s.item}>
                    <div className={s.list}>
                        <NavLink to="/user" className={s.user}>
                            <Img height={20} src={user} alt="user" />
                            <div className={s.name}>Інна Пономаренко</div>
                        </NavLink>
                        <button className={classNames(s.btn, s.allWidth, s.brown)}>
                            <div className={s.wrapper}>
                                <Img height={20} src={message_brown} alt="user" />
                                <div className={s.text}>Чат</div>
                                <div className={s.number}>+2</div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={s.item}>
                    <nav className={s.nav}>
                        <NavLink className={s.href}>Інформація</NavLink>
                        <NavLink className={s.href}>
                            <div className={s.wrapper}>
                                <div className={s.info}>Заявки</div>
                                <div className={s.number}>+2</div>
                            </div></NavLink>
                        <NavLink className={s.href}>Відгуки</NavLink>
                    </nav>
                </div>
                <div className={s.item}>
                    <ol className={s.categories}>
                        <li>
                            <Btn to="/" otherClass="menuListMain" backgroundColor="red" isAllWidth={true}>Торти</Btn>
                        </li>
                        <li>
                            <Btn to="/" otherClass="menuList" backgroundColor="pinkTransparent" isAllWidth={true}>Капкейки</Btn>
                        </li>
                        <li>
                            <Btn to="/" otherClass="menuList" backgroundColor="pinkTransparent" isAllWidth={true}>Макаруни</Btn>
                        </li>
                    </ol>
                    <button className={s.button}>
                        <Img height={20} src={plus} alt="plus" />
                        <div className={s.text}>Додати категорію</div>
                    </button>
                </div>
                <div className={s.item}>
                    <div className={s.footer}>
                        <NavLink className={s.link} to="/">
                            <div className={s.text}>Кабінет кондитера</div>
                            <Img height={15} src={arrow} alt="arrow" />
                        </NavLink>
                        <button className={classNames(s.btn, s.animated)}>
                            <div className={s.text}>Вийти</div>
                            <Img height={15} src={logout} alt="logout" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfectionerMenu;