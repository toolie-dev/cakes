import s from "./CardProductSearch.module.css";
import { NavLink } from "react-router-dom";

const CardProductSearch = (props) => {
    return(
        <NavLink to="/" className={s.item}>
            <div className={s.wrapper}>
                <div className={s.img}>
                    <img src={props.img} alt="photo" />
                </div>
                <div className={s.wrap}>
                    <div className={s.cost}>{props.cost}</div>
                    <div className={s.title}>{props.title}</div>
                    <div className={s.detail}>{props.detail}</div>
                </div>
            </div>
        </NavLink>
    )
}

export default CardProductSearch;