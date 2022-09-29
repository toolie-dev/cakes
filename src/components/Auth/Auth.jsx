import s from "./Auth.module.css";
import Header from "../HeaderAuth/HeaderAuth";

const Auth = (props) => {
    return(
        <div className={s.canvas}>
            <section className={s.auth}>
                <Header title="Реєстрація" />
                <div className={s.main}>
                    main
                </div>
                <div className={s.footer}>
                    footer
                </div>
            </section>
        </div>
    )
}

export default Auth;