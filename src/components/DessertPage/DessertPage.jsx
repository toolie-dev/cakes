import CardProduct from "../Cards/CardProduct/CardProduct";
import SlickSlider from "../SlickSlider/SlickSlider";
import Confectioner from "./Confectioner/Confectioner";
import { listOthers, listSimilar } from "./data";
import Dessert from "./Dessert/Dessert";

const DessertPage = (props) => {
    const others = listOthers.map((item, i) => <CardProduct key={i + 1} {...item} />),
        similar = listSimilar.map((item, i) => <CardProduct key={i + 1} {...item} />);
    return(
        <main>
            <Dessert />
            <Confectioner />
            <SlickSlider items={others} title="Інші вироби кондитера" />
            <SlickSlider items={similar} title="Схожі торти" />
        </main>
    )
}

export default DessertPage