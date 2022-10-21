import s from "./SubspeciesCard.module.css";

const SubspeciesCard = (props) => {
    return(
        <div className={s.item}>
            <div className={s.img}>
                <img src={props.src} alt="photo" />
            </div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default SubspeciesCard;