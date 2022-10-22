import s from "./CardConfectioner.module.css";
import { NavLink } from "react-router-dom";

const Tags = (props) => {
    if(props.tags){
        const bigNumberTagsShow = 2;
        const bigWindowTags = props.tags.map((item, i) => {
            if(i < bigNumberTagsShow){
                return(
                    <button key={i++} className={s.item}>{item}</button>
                )
            }
        });

        const miniNumberTagsShow = 3;
        const miniWindowTags = props.tags.map((item, i) => {
            if(i < miniNumberTagsShow){
                return(
                    <button key={i++} className={s.item}>{item}</button>
                )
            }
        });

        return(
            <div className={s.tags}>
                <div className={s.big}>
                    {bigWindowTags}
                    <div className={s.item}>{((props.tags.length - bigNumberTagsShow) > 0) && `+ ${props.tags.length - bigNumberTagsShow}`}</div>
                </div>
                <div className={s.mini}>
                    {miniWindowTags}
                    <div className={s.item}>{((props.tags.length - miniNumberTagsShow) > 0) && `+ ${props.tags.length - miniNumberTagsShow}`}</div>
                </div>
            </div>
        )
    }
}

const CardConfectioner = (props) => {
    return(
        <div className={s.elem}>
            <NavLink to="/" className={s.item}>
                <div className={s.wrapper}>
                    <div className={s.img}>
                        <img src={props.img} alt="photo" />
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.reviews}>{props.reviews} відгуки</div>
                    </div>
                    <div className={s.other}>
                        <div className={s.desc}>{props.desc}</div>
                        <Tags tags={props.tags} />
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CardConfectioner;