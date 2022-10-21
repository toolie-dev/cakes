import logo from "../../assets/icons/logo.svg";
import message_grey from "../../assets/icons/message_grey.svg";
import user from "../../assets/icons/user_grey.svg";
import location from "../../assets/icons/location.svg";

import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Container from "../common/Container/Container";
import { Transition } from 'react-transition-group';

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
                        <NavLink to="/index" className="img img_40">
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <button className={s.button}>
                            <div className="img img_20">
                                <img src={location} alt="location" />
                            </div>
                            <div className={s.text}>Вся Україна</div>
                        </button>
                    </div>
                    <nav className={s.nav}>
                        <NavLink className={s.item}>Десерти</NavLink>
                        <NavLink className={s.item}>Кращі кондитери</NavLink>
                        <NavLink className={s.item}>Корисні статті</NavLink>
                    </nav>
                    <div className={s.info}>
                        {props.isAuth?
                        <>
                            <NavLink to="/message" className={`img img_30 ${s.message}`}>
                                <img src={message_grey} alt="message" />
                                <span className={s.number}>2</span>
                            </NavLink>
                            <NavLink to="/user" className={s.user}>
                                <div className="img img_30">
                                    <img src={user} alt="user" />
                                </div>
                                <div className={s.name}>Інна Пономаренко</div>
                            </NavLink>
                        </>:
                        <>
                            <button onClick={ () => { props.setTypePopup("auth") } } className={s.user}>
                                <div className="img img_30">
                                    <img src={user} alt="user" />
                                </div>
                                <div className={s.name}>Увійти</div>
                            </button>
                        </>}
                        <button onClick={ onClick } className={s.btn}>
                            <Transition
                            in={props.typePopup === "menu"}
                            timeout={1000}
                            >
                                {state => (
                                    <div className={`${s.toggle} ${s[state]}`}>
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