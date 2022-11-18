import s from "./CardProduct.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const CardProduct = ({isMini, ...props}) => {
    return(
        <div className={s.elem}>
            <NavLink to="/" className={classNames(s.item, isMini && s.mini)}>
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
        </div>
    )
}

export default CardProduct;