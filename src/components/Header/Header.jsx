import logo from "../../assets/icons/logo.svg";
import message_grey from "../../assets/icons/message_grey.svg";
import user from "../../assets/icons/user_grey.svg";

import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Container from "../common/Container/Container";
import ChooseCity from "../ChooseCity/ChooseCity";

const Header = (props) => {
    return(
        <header className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <NavLink to="/index" className="img img_40">
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <ChooseCity isFixedWidth={true} />
                    </div>
                    <nav className={s.info}>
                        <NavLink className={s.item}>Десерти</NavLink>
                        <NavLink className={s.item}>Кращі кондитери</NavLink>
                        <NavLink className={s.item}>Корисні статті</NavLink>
                    </nav>
                    <div className={s.user}>
                        <NavLink to="/message" className="img img_30">
                            <img src={message_grey} alt="message" />
                        </NavLink>
                        <NavLink to="/user" className={s.user}>
                            <div className="img img_30">
                                <img src={user} alt="user" />
                            </div>
                            <div className={s.name}>Інна Пономаренко</div>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;