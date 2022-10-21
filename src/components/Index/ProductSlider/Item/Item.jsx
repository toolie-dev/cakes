import s from "./Item.module.css";

const Item = (props) => {
    return(
        <div className={s.elem}>
            <div className={s.item}>
                <div className={s.img}>
                    <img src={props.img} alt="photo" />
                </div>
                <div className={s.wrap}>
                    <div className={s.cost}>{props.cost}</div>
                    <div className={s.title}>{props.title}</div>
                    <div className={s.detail}>{props.detail}</div>
                </div>
            </div>
        </div>
    )
}

export default Item;