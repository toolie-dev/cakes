import s from "./HeaderAuth.module.css";

const HeaderAuth = (props) => {
    return (
        <div className={s.header}>
            <h1 className={"title title_auth"}>{props.title}</h1>
            <button onClick={ () => { props.setTypePopup("") } } className={s.close}>&#10006;</button>
        </div>
    )
}

export default HeaderAuth;