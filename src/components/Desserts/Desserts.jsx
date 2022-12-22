import { listConfectioners, listArticles } from "./data.js";

import s from "./Desserts.module.css";
import SlickSlider from "../SlickSlider/SlickSlider";
import CardConfectioner from "../Cards/CardConfectioner/CardConfectioner";
import CardArticle from "../Cards/CardArticle/CardArticle";
import SearchForm from "../SearchForm/SearchForm";
import SearchMain from "../SearchMain/SearchMain";
import SearchAside from "../SearchAside/SearchAside";
import Container from "../common/Container/Container";
import { products } from "./data.js";
import SearchTag from "../SearchTag/SearchTag.jsx";
import CardProduct from "../Cards/CardProduct/CardProduct.jsx";

const list =[
    {
        title: "Тематика",
        list: [
            {
                ua: "Для дівчат",
                en: "forGirls"
            },
            {
                ua: "Для чоловіків",
                en: "forMen"
            },
            {
                ua: "Патріотичні",
                en: "patriotic"
            },
            {
                ua: "Весільні",
                en: "nuptial"
            },
            {
                ua: "До дня народження",
                en: "toTheBirthday"
            },
            {
                ua: "Корпоративні",
                en: "corporate"
            }
        ]
    },
    {
        title: "Особливості",
        list: [
            {
                ua: "Класичні рецепти",
                en: "classicRecipes"
            },
            {
                ua: "Без глютену",
                en: "glutenFree"
            },
            {
                ua: "Веганські",
                en: "vegan"
            },
            {
                ua: "Без цукру",
                en: "withoutSugar"
            },
            {
                ua: "З фруктами",
                en: "withFruits"
            },
            {
                ua: "З квітами",
                en: "withFlowers"
            }
        ]
    }
]

const Desserts = (props) => {
    const confectioners = listConfectioners.map((item, i) => <CardConfectioner key={i + 1} {...item} />),
        articles = listArticles.map((item, i) => <CardArticle key={i + 1} {...item} />),
        items = products.map((item, i) => <CardProduct key={i + 1} isNeedWrepper={false} isSearch={true} {...item}/>);
    return(
        <main>
            <section className={s.search}>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.header}>
                            <SearchForm placeholder="Шоколадний торт з квітами" setResult={props.setResult} deleteResult={props.deleteResult} result={props.result} />
                        </div>
                        <SearchTag setTags={props.setTags} />
                        <SearchAside setTypes={props.setTypes} title="Шукаєш щось особливе?" list={list} />
                        <SearchMain items={items} numberColumn={4} setActivePage={props.setActivePage} numberPage={props.numberPage} activePage={props.activePage} />
                    </div>
                </Container>
            </section>
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