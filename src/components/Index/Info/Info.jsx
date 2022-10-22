import s from "./Info.module.css";
import Container from "../../common/Container/Container";

const Info = (props) => {
    return(
        <section className={s.section}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <h1 className="title title_section">Обожнюєш свою роботу і хочеш більше клієнтів?</h1>
                        <h2 className="subtitle subtitle_section">Реєструйся як кондитер, викладай фото своїх смаколиків та отримуй замовлення через MyCake</h2>
                    </div>
                    <button onClick={ () => { props.setTypePopup("registration") } } className="btn btn_blue">Зареєструватися як кондитер</button>
                </div>
            </Container>
        </section>
    )
}

export default Info;