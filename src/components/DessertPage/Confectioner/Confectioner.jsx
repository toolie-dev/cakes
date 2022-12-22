import Container from "../../common/Container/Container";
import s from "./Confectioner.module.css";
import Reviews from "./Reviews/Reviews";
import User from "./User/User";

const Confectioner = (props) => {
    const isReviews = true,
        isDescription = true;
    return(
        <section className={s.confectioners}>
            <Container>
                <div className={s.wrapper}>
                    <User isDescription={isDescription} />
                    {isReviews && <Reviews />}
                </div>
            </Container>
        </section>
    )
}

export default Confectioner;