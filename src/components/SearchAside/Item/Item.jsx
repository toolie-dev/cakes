import check from "../../../assets/icons/check.svg";

import Img from "../../common/Img/Img";
import s from "./Item.module.css";

const Item = (props) => {
    return(
        <div className={s.item}>
            <input onChange={ () => { props.setTypes(props.en) } } className={s.input} id={props.en} type="checkbox" />
            <label className={s.label} htmlFor={props.en}>
                <div className={s.square}>
                    <div className={s.tick}>        
                        <Img height={15} src={check} alt="check" />
                    </div>
                </div>
                <div className={s.text}>{props.ua}</div>
            </label>
        </div>
    )
}

export default Item;