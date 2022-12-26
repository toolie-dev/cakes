import CardProduct from "../Cards/CardProduct/CardProduct";
import Container from "../common/Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import SlickSlider from "../SlickSlider/SlickSlider";
import Confectioner from "./Confectioner/Confectioner";
import { listOthers, listSimilar } from "./data";
import Dessert from "./Dessert/Dessert";
import s from "./DessertPage.module.css";

const DessertPage = (props) => {
    const others = listOthers.map((item, i) => <CardProduct key={i + 1} {...item} />),
        similar = listSimilar.map((item, i) => <CardProduct key={i + 1} {...item} />);
    return(
        <main>
            <div className={s.wrapper}>
                <Container>
                    <SearchForm placeholder="Шоколадний торт з квітами" isResult={false} setResult={(result) => console.log(result)} />
                </Container>
            </div>
            <Dessert />
            <Confectioner />
            <SlickSlider items={others} title="Інші вироби кондитера" />
            <SlickSlider items={similar} title="Схожі торти" />
        </main>
    )
}

export default DessertPage