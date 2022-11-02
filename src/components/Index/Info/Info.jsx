import s from "./Info.module.css";
import Container from "../../common/Container/Container";
import Title from "../../common/Title/Title";
import Subtitle from "../../common/Subtitle/Subtitle";
import Btn from "../../common/Btn/Btn";

const Info = (props) => {
    return(
        <section className={s.section}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <Title otherClass="section">Обожнюєш свою роботу і хочеш більше клієнтів?</Title>
                        <Subtitle otherClass="section">Реєструйся як кондитер, викладай фото своїх смаколиків та отримуй замовлення через MyCake</Subtitle>
                    </div>
                    <Btn onClick={ () => { props.setTypePopup("registration") } } backgroundColor="blue">Зареєструватися як кондитер</Btn>
                </div>
            </Container>
        </section>
    )
}

export default Info;