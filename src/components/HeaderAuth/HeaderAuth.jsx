import s from "./HeaderAuth.module.css";

const HeaderAuth = (props) => {
    return (
        <div className={s.header}>
            <h1 className={"title title_auth"}>{props.title}</h1>
            <div className={s.close}>&#10006;</div>
        </div>
    )
}

export default HeaderAuth;