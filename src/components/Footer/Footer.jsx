import logo from "../../assets/icons/logo_white.svg";
import location from "../../assets/icons/location.svg";
import youtube from "../../assets/icons/socialNetwork/youtube.svg";
import instagram from "../../assets/icons/socialNetwork/instagram.svg";

import s from "./Footer.module.css";
import Container from "../common/Container/Container";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
    return(
        <footer className={s.footer}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <div className="img img_40">
                            <img src={logo} alt="logo" />
                        </div>
                        <button className={s.button}>
                            <div className="img img_20">
                                <img src={location} alt="location" />
                            </div>
                            <div className={s.text}>Вся Україна</div>
                        </button>
                    </div>
                    <div>
                    <nav className={s.nav}>
                        <NavLink className={s.item}>Десерти</NavLink>
                        <NavLink className={s.item}>Кращі кондитери</NavLink>
                        <NavLink className={s.item}>Корисні статті</NavLink>
                    </nav>
                    </div>
                    <div className={s.other}>
                        <div className={s.btns}>
                            <NavLink className="btn btn_transparent">Правила користування</NavLink>
                            <NavLink className="btn btn_white">Форма зворотнього зв’язку</NavLink>
                        </div>
                        <div className={s.info}>
                            <div className={s.information}>© Mycake 2022</div>
                            <div className={s.information}>All rights reserved</div>
                        </div>
                        <nav className={s.socialNetwork}>
                            <a href="https://www.instagram.com" className="img img_40">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="https://www.youtube.com" className="img img_40">
                                <img src={youtube} alt="youtube" />
                            </a>
                        </nav>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;