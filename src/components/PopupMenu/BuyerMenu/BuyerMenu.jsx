import message_brown from "../../../assets/icons/message_brown.svg";
import user from "../../../assets/icons/user_grey.svg";
import logout from "../../../assets/icons/logout.svg";

import s from "./BuyerMenu.module.css";
import { NavLink } from "react-router-dom";
import Img from "../../common/Img/Img";
import classNames from "classnames";
import { ChooseCity } from "../../common/Btn/Btns/Btns";

const BuyerMenu = (props) => {
    return(
        <>
            <div className={s.wrap}>
                <div className={s.item}>
                    <ChooseCity isAllWidth={true} text="Вся Україна" />
                </div>
                <div className={s.item}>
                    <nav className={s.list}>
                        <NavLink to="/desserts" className={s.href} href="#">Десерти</NavLink>
                        <NavLink to="/" className={s.href} href="#">Кращі кондитери</NavLink>
                        <NavLink to="/" className={s.href} href="#">Корисні статті</NavLink>
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
                        <button className={classNames(s.btn, s.brown)}>
                            <div className={s.wrapper}>
                                <Img height={20} src={message_brown} alt="user" />
                                <div className={s.text}>Чат</div>
                                <div className={s.number}>+2</div>
                            </div>
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
                    <button className={classNames(s.btn, s.animated)}>
                        <div className={s.text}>Вийти</div>
                        <Img height={15} src={logout} alt="logout" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default BuyerMenu;