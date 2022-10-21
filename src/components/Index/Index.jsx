import CakesPhoto_1 from "../../assets/img/Goods/Cakes/photo_1.png";
import CakesPhoto_2 from "../../assets/img/Goods/Cakes/photo_2.png";
import CakesPhoto_3 from "../../assets/img/Goods/Cakes/photo_3.png";
import CakesPhoto_4 from "../../assets/img/Goods/Cakes/photo_4.png";
import CakesPhoto_5 from "../../assets/img/Goods/Cakes/photo_5.png";

import CupcakesPhoto_1 from "../../assets/img/Goods/Cupcakes/photo_1.png";
import CupcakesPhoto_2 from "../../assets/img/Goods/Cupcakes/photo_2.png";
import CupcakesPhoto_3 from "../../assets/img/Goods/Cupcakes/photo_3.png";
import CupcakesPhoto_4 from "../../assets/img/Goods/Cupcakes/photo_4.png";
import CupcakesPhoto_5 from "../../assets/img/Goods/Cupcakes/photo_5.png";

import s from "./Index.module.css"
import ProductSliderContainer from "./ProductSlider/ProductSliderContainer";
import Promo from "./Promo/Promo";

const list1 = [
    {
        img: CakesPhoto_1,
        cost: "520 грн",
        title: "Торт “Літнє бажання” з шоколадом та макарунами",
        detail: "4 варіанти начинок",
    },
    {
        img: CakesPhoto_2,
        cost: "520 грн",
        title: "Весільний триярусний торт з фруктами та квітами",
        detail: "4 варіанти начинок"
    },
    {
        img: CakesPhoto_3,
        cost: "520 грн",
        title: "Бісквітний торт з ягодами",
        detail: "4 варіанти начинок"
    },
    {
        img: CakesPhoto_4,
        cost: "520 грн",
        title: "Ванільно-карамельний торт з печивом Орео",
        detail: "4 варіанти начинок"
    },
    {
        img: CakesPhoto_5,
        cost: "520 грн",
        title: "Торт рожевий з макарунами",
        detail: "4 варіанти начинок"
    }
]

const list2 = [
    {
        img: CupcakesPhoto_1,
        cost: "520 грн",
        title: "Пасхальні капкейки шоколадні та ванільні ",
        detail: "4 варіанти начинок",
    },
    {
        img: CupcakesPhoto_2,
        cost: "520 грн",
        title: "Оригінальні капкейки з кремом та печивом",
        detail: "4 варіанти начинок"
    },
    {
        img: CupcakesPhoto_3,
        cost: "520 грн",
        title: "Капкейки з карамеллю 3 шт",
        detail: "4 варіанти начинок"
    },
    {
        img: CupcakesPhoto_4,
        cost: "520 грн",
        title: "Капкейки з ніжним кремом",
        detail: "4 варіанти начинок"
    },
    {
        img: CupcakesPhoto_5,
        cost: "520 грн",
        title: "Чорні капкейки з шоколадом та печивом",
        detail: "4 варіанти начинок"
    }
]

const Index = (props) => {
    return(
        <main className={s.main}>
            <Promo />
            <ProductSliderContainer title="Торти" list={list1} />
            <ProductSliderContainer title="Капкейки" list={list2} />
        </main>
    )
}

export default Index;