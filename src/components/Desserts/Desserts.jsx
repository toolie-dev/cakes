import ConfectionersPhoto_1 from "../../assets/img/Confectioners/photo_1.png";
import ConfectionersPhoto_2 from "../../assets/img/Confectioners/photo_2.png";
import ConfectionersPhoto_3 from "../../assets/img/Confectioners/photo_3.png";

import ArticlesPhoto_1 from "../../assets/img/Articles/photo_1.png";
import ArticlesPhoto_2 from "../../assets/img/Articles/photo_2.png";
import ArticlesPhoto_3 from "../../assets/img/Articles/photo_3.png";
import ArticlesPhoto_4 from "../../assets/img/Articles/photo_4.png";
import ArticlesPhoto_5 from "../../assets/img/Articles/photo_5.png";

//import s from "./Desserts.module.css"
import SlickSlider from "../SlickSlider/SlickSlider";
import CardConfectioner from "../Cards/CardConfectioner/CardConfectioner";
import CardArticle from "../Cards/CardArticle/CardArticles";

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

const Desserts = (props) => {
    const confectioners = listConfectioners.map((item, i) => <CardConfectioner key={i++} {...item} />),
        articles = listArticles.map((item, i) => <CardArticle key={i++} {...item} />);
    return(
        <main>
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

export default Desserts;