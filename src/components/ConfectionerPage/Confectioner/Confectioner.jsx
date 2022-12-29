import CardProduct from "../../Cards/CardProduct/CardProduct";
import Container from "../../common/Container/Container";
import SearchForm from "../../SearchForm/SearchForm";
import SlickSlider from "../../SlickSlider/SlickSlider";
import classNames from "classnames";
import { listCakes, listCupcakes } from "../data.js";
import User from "./User/User";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import s from "./Confectioner.module.css";

const Confectioner = (props) => {
    const cakes = listCakes.map((item, i) => <CardProduct key={i + 1} {...item} />),
        cupcakes = listCupcakes.map((item, i) => <CardProduct key={i + 1} {...item} />);

    return(
        <main>
            <div className={s.wrapper}>
                <Container>
                    <SearchForm placeholder="Шоколадний торт з квітами" isResult={false} setResult={(result) => console.log(result)} />
                </Container>
            </div>
            <div>
                <Container>
                    <div className={s.wrap}>
                        <div className={s.btns}>
                            <button className={classNames(s.btn, s.active)}>Про кондитера</button>
                            <button onClick={ () => { props.setTypePage("goods") } } className={s.btn}>Товари</button>
                        </div>
                        <div>
                            <User />
                            <ReviewsContainer />
                        </div>
                    </div>
                </Container>
            </div>
            <SlickSlider items={cakes} title="Торти" />
            <SlickSlider items={cupcakes} title="Капкейки" />
        </main>
    )
}

export default Confectioner;