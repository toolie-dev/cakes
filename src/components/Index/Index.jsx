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

import ConfectionersPhoto_1 from "../../assets/img/Confectioners/photo_1.png";
import ConfectionersPhoto_2 from "../../assets/img/Confectioners/photo_2.png";
import ConfectionersPhoto_3 from "../../assets/img/Confectioners/photo_3.png";

import ArticlesPhoto_1 from "../../assets/img/Articles/photo_1.png";
import ArticlesPhoto_2 from "../../assets/img/Articles/photo_2.png";
import ArticlesPhoto_3 from "../../assets/img/Articles/photo_3.png";
import ArticlesPhoto_4 from "../../assets/img/Articles/photo_4.png";
import ArticlesPhoto_5 from "../../assets/img/Articles/photo_5.png";

import s from "./Index.module.css"
import Info from "./Info/Info";
import Promo from "./Promo/Promo";
import SlickSlider from "../SlickSlider/SlickSlider";
import CardProduct from "../Cards/CardProduct/CardProduct.jsx";
import CardConfectioner from "../Cards/CardConfectioner/CardConfectioner";
import CardArticle from "../Cards/CardArticle/CardArticles";

const listProduct_1 = [
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

const listProduct_2 = [
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

const listConfectioners = [
    {
        img: ConfectionersPhoto_1,
        name: "Інна Пономаренко",
        reviews: 23,
        desc: "Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...",
        tags: ["Торти", "Цукерки", "Капкейки", "Макаруни", "Кейк-попси"]
    },
    {
        img: ConfectionersPhoto_2,
        name: "Home Bakery",
        reviews: 59,
        desc: "Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...",
        tags: ["Торти", "Капкейки", "Цукерки", "Макаруни", "Кейк-попси"]
    },
    {
        img: ConfectionersPhoto_3,
        name: "Іванна Марченко",
        reviews: 15,
        desc: "Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...",
        tags: ["Макаруни", "Капкейки", "Цукерки", "Торти", "Кейк-попси"]
    }
]

const listArticles = [
    {
        img: ArticlesPhoto_1,
        title: "Кращі кондитерські Києва",
        desc: "Ми знаємо, де у Києві готують і подають смачні десерти та фірмові булочки, шоколадні цукерки ручної роботи, а також де можна купити натуральний шоколад. І вам розкажемо..."
    },
    {
        img: ArticlesPhoto_2,
        title: "Як приготувати справжній французький круасан",
        desc: "Всі, хто любить круасани, мріють одного разу опинитися в маленькій французькій пекарні з гарячим круасаном в руках. Чи це не чудово? Ті, хто там побу..."
    },
    {
        img: ArticlesPhoto_3,
        title: "Рецепти найсмачніших макарунів з незвичними смаками",
        desc: "Вишукане і неймовірно смачне французьке печиво «Макаронів» за класичним рецептом готується на основі мигдальної муки. Н..."
    },
    {  
        img: ArticlesPhoto_4,
        title: "Малинове безе в домашніх умовах",
        desc: "Безе, або меренга - це класичний французький десерт з запеченого білкового крему. Неймовірно ніжний, м'який всередині і трохи хрусткий зов..."
    },
    {
        img: ArticlesPhoto_5,
        title: "Рецепти шоколаду без цукру",
        desc: "Розглянемо популярні способи приготування домашнього шоколаду. Його головна особливість — можливість комбінування різних продуктів..."
    }
]

const Index = (props) => {
    const itemsProduct_1 = listProduct_1.map((item, i) => <CardProduct key={i++} {...item} />),
        itemsProduct_2 = listProduct_2.map((item, i) => <CardProduct key={i++} {...item} />),
        confectioners = listConfectioners.map((item, i) => <CardConfectioner key={i++} {...item} />),
        articles = listArticles.map((item, i) => <CardArticle key={i++} {...item} />);
    return(
        <main className={s.main}>
            <Promo />
            <SlickSlider items={itemsProduct_1} title="Торти" />
            <SlickSlider items={itemsProduct_2} title="Капкейки" />
            {props.isAuth || <Info setTypePopup={props.setTypePopup} />}
            <SlickSlider settings={{
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            }} items={confectioners} title="Кращі кондитери" />
            <SlickSlider settings={{
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 762,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 475,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            }} items={articles} title="Статті" />
        </main>
    )
}

export default Index;