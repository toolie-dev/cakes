import logo from "../../assets/icons/logo_white.svg";
import youtube from "../../assets/icons/socialNetwork/youtube.svg";
import instagram from "../../assets/icons/socialNetwork/instagram.svg";

import s from "./Footer.module.css";
import Container from "../common/Container/Container";
import { NavLink } from "react-router-dom";
import Img from "../common/Img/Img";
import Btn from "../common/Btn/Btn";
import { ChooseCity } from "../common/Btn/Btns/Btns";

const Footer = (props) => {
    return(
        <footer className={s.footer}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <NavLink to="/index">
                            <Img height={40} src={logo} alt="logo" />
                        </NavLink>
                        <ChooseCity text="Вся Україна" />
                    </div>
                    <div>
                    <nav className={s.nav}>
                        <NavLink to="/desserts" className={s.item}>Десерти</NavLink>
                        <NavLink to="/confectioners" className={s.item}>Кращі кондитери</NavLink>
                        <NavLink to="/articles" className={s.item}>Корисні статті</NavLink>
                    </nav>
                    </div>
                    <div className={s.other}>
                        <div className={s.btns}>
                            <NavLink to="/">
                                <Btn isAllWidth={true} otherClass="footer" backgroundColor="transparent">Правила користування</Btn>
                            </NavLink>
                            <NavLink to="/">
                                <Btn isAllWidth={true} otherClass="footer" backgroundColor="white">Форма зворотнього зв’язку</Btn>
                            </NavLink>
                        </div>
                        <div className={s.info}>
                            <div className={s.information}>© Mycake 2022</div>
                            <div className={s.information}>All rights reserved</div>
                        </div>
                        <nav className={s.socialNetwork}>
                            <a href="https://www.instagram.com">
                                <Img height={40} src={instagram} alt="instagram" />
                            </a>
                            <a href="https://www.youtube.com">
                                <Img height={40} src={youtube} alt="youtube" />
                            </a>
                        </nav>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;