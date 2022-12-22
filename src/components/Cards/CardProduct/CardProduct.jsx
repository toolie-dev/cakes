import s from "./CardProduct.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const CardProduct = ({isNeedWrepper = true, ...props}) => {
    const CardProduct = (
        <NavLink to="/dessert/1" className={classNames(s.item, props.isMini && s.mini, props.isSearch && s.search)}>
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
    
    if(isNeedWrepper) return <div className={s.elem}>{CardProduct}</div>
    else return CardProduct
}

export default CardProduct;