import Container from "../../common/Container/Container";
import Description from "./Description/Description";
import s from "./Dessert.module.css";
import Photos from "./Photos/Photos";

const Dessert = (props) => {
    return(
        <section className={s.dessert}>
            <Container>
                <div className={s.wrapper}>
                    <Photos />
                    <Description />
                </div>
            </Container>
        </section>
    )
}

export default Dessert;