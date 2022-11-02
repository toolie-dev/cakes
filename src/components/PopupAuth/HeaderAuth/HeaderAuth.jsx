import Title from "../../common/Title/Title";
import s from "./HeaderAuth.module.css";

const HeaderAuth = (props) => {
    return (
        <div className={s.header}>
            <Title otherClass={"auth"}>{props.title}</Title>
            <button onClick={ () => { props.setTypePopup("") } } className={s.close}>&#10006;</button>
        </div>
    )
}

export default HeaderAuth;