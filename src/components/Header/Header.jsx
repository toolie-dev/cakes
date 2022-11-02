import logo from "../../assets/icons/logo_blue.svg";
import message_grey from "../../assets/icons/message_grey.svg";
import user from "../../assets/icons/user_grey.svg";

import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Container from "../common/Container/Container";
import { Transition } from 'react-transition-group';
import Img from "../common/Img/Img";
import classNames from "classnames";
import { ChooseCity } from "../common/Btn/Btns/Btns";

const Header = (props) => {
    const onClick = () => {
        if(props.typePopup === "menu"){
            props.setTypePopup("");
        }else{
            props.setTypePopup("menu");
        }
    }

    return(
        <header className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <NavLink to="/index">
                            <Img height={40} src={logo} alt="logo" />
                        </NavLink>
                        <ChooseCity isHidden={true} text="Вся Україна" />
                    </div>
                    <nav className={s.nav}>
                        <NavLink to="/desserts" className={({ isActive }) => isActive ? classNames(s.item, s.active) : s.item}>Десерти</NavLink>
                        <NavLink to="/test" className={({ isActive }) => isActive ? classNames(s.item, s.active) : s.item}>Кращі кондитери</NavLink>
                        <NavLink to="/test" className={({ isActive }) => isActive ? classNames(s.item, s.active) : s.item}>Корисні статті</NavLink>
                    </nav>
                    <div className={s.info}>
                        {props.isAuth?
                        <>
                            <NavLink to="/message" className={s.message}>
                                <Img height={30} src={message_grey} alt="user" />
                                <span className={s.number}>2</span>
                            </NavLink>
                            <NavLink to="/user" className={s.user}>
                                <Img height={30} src={user} alt="user" />
                                <div className={s.name}>Інна Пономаренко</div>
                            </NavLink>
                        </>:
                        <>
                            <button onClick={ () => { props.setTypePopup("auth") } } className={s.user}>
                                <Img height={30} src={user} alt="user" />
                                <div className={s.name}>Увійти</div>
                            </button>
                        </>}
                        <button onClick={ onClick } className={s.btn}>
                            <Transition
                            in={props.typePopup === "menu"}
                            timeout={1000}
                            >
                                {state => (
                                    <div className={classNames(s.toggle, s[state])}>
                                        <span className={s.menu}>&#9776;</span>
                                        <span className={s.close}>&#10006;</span>
                                    </div>
                                )}
                            </Transition>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;