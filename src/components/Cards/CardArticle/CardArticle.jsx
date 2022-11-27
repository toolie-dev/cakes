import s from "./CardArticle.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import Btn from "../../common/Btn/Btn";

const CardArticle = ({isNeedWrepper = true, ...props}) => {
    const CardArticle = (
        <NavLink to="/" className={classNames(s.item, props.isSearch && s.search)}>
            <div className={s.wrapper}>
                <div className={s.img}>
                    <img src={props.img} alt="photo" />
                </div>
                <div className={s.main}>
                    <div className={s.wrap}>
                        <div className={s.title}>{props.title}</div>
                        <div className={s.desc}>{props.desc}</div>
                    </div>
                    <div className={s.btns}>
                        <Btn isAllWidth={true} backgroundColor="yellow">Читати далі</Btn>
                    </div>
                </div>
            </div>
        </NavLink>
    )

    if(isNeedWrepper) return <div className={s.elem}>{CardArticle}</div>
    else return CardArticle
}

export default CardArticle;