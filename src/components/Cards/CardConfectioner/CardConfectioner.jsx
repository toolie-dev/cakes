import s from "./CardConfectioner.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Tags = (props) => {
    return(
        <div className={s.tags}>
            {props.tags[0] && <div className={s.btn}>{props.tags[0]}</div>}
            {props.tags[1] && <div className={s.btn}>{props.tags[1]}</div>}
            {(props.tags.length - 2) > 0 && <div className={s.btn}>+{props.tags.length - 2}</div>}
        </div>
    )
}

const CardConfectioner = ({isNeedWrapper = true, ...props}) => {
    const CardConfectioner = (
        <NavLink to="/confectioner/1" className={classNames(s.item, props.isMini && s.mini)}>
            <div className={s.wrapper}>
                <div className={s.img}>
                    <img src={props.img} alt="photo" />
                </div>
                <div className={s.name}>{props.name}</div>
                <div className={s.reviews}>{props.reviews} {props.reviews % 2 === 1? "відгуків": "відгуки"}</div>
                <div className={s.desc}>{props.desc}</div>
                <Tags tags={props.tags} />
            </div>
        </NavLink>
    )

    if(isNeedWrapper)return <div className={s.elem}>{CardConfectioner}</div>
    else return CardConfectioner
}

export default CardConfectioner;