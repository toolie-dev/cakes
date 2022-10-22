import s from "./CardProduct.module.css";
import { NavLink } from "react-router-dom";

const CardProduct = (props) => {
    return(
        <div className={s.elem}>
            <NavLink to="/" className={s.item}>
                <div className={s.img}>
                    <img src={props.img} alt="photo" />
                </div>
                <div className={s.wrap}>
                    <div className={s.cost}>{props.cost}</div>
                    <div className={s.title}>{props.title}</div>
                    <div className={s.detail}>{props.detail}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default CardProduct;