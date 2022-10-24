import s from "./CardArticle.module.css";
import { NavLink } from "react-router-dom";

const CardArticle = (props) => {
    return(
        <div className={s.elem}>
            <NavLink to="/" className={s.item}>
                <div className={s.wrapper}>
                    <div className={s.img}>
                        <img src={props.img} alt="photo" />
                    </div>
                    <div className={s.wrap}>
                        <div className={s.title}>{props.title}</div>
                        <div className={s.desc}>{props.desc}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CardArticle;