import classNames from "classnames";
import location from "../../../../assets/icons/location.svg";
import more from "../../../../assets/icons/more.svg";

import Img from "../../Img/Img";
import s from "./Btns.module.css";

export const LoginUsingSocialNetwork = (props) => {
    return(
        <button className={s.loginUsingSocialNetwork}>
            <Img height={20} src={props.img} alt={props.text} />
            <div className={s.text}>{props.text}</div>
        </button>
    );
}

export const ChooseCity = (props) => {
    return(
        <button className={classNames(s.сhooseCity, props.isAllWidth && s.isAllWidth, props.isHidden && s.hidden, props.isTransparent && s.transparent)}>
            <Img height={20} src={location} alt="location" />
            <div className={s.text}>{props.text}</div>
        </button>
    );
}

export const MoreGoodies = (props) => {
    return(
        <button className={s.moreGoodies}>
            <Img height={25} src={more} alt="more" />
            <div className={s.text}>Більше смаколиків</div>
        </button>
    )
}