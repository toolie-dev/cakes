import s from "./Goods.module.css";
import Container from "../../common/Container/Container";
import SearchForm from "../../SearchForm/SearchForm";
import SlickSlider from "../../SlickSlider/SlickSlider";
import classNames from "classnames";
import { listArticles, listConfectioners, listGoods } from "../data.js";
import CardConfectioner from "../../Cards/CardConfectioner/CardConfectioner";
import CardArticle from "../../Cards/CardArticle/CardArticle";
import SearchAside from "../../SearchAside/SearchAside";
import Title from "../../common/Title/Title";
import SearchTag from "../../SearchTag/SearchTag";
import SearchMain from "../../SearchMain/SearchMain";
import CardProduct from "../../Cards/CardProduct/CardProduct";

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

const Goods = (props) => {
    const confectioners = listConfectioners.map((item, i) => <CardConfectioner key={i + 1} {...item} />),
        articles = listArticles.map((item, i) => <CardArticle key={i + 1} {...item} />),
        goods = listGoods.map((item, i) => <CardProduct key={i + 1} isNeedWrepper={false} isSearch={true} {...item}/>);

    return(
        <main>
            <div className={s.wrapper}>
                <Container>
                    <SearchForm placeholder="Шоколадний торт з квітами" isResult={false} setResult={(result) => console.log(result)} />
                </Container>
            </div>
            <Container>
                <div className={s.wrap}>
                    <div className={s.btns}>
                        <button onClick={ () => { props.setTypePage("confectioner") } } className={s.btn}>Про кондитера</button>
                        <button className={classNames(s.btn, s.active)}>Товари</button>
                    </div>
                    <div className={s.info}>
                        <div className={s.title}>
                            <Title>Інна Пономаренко</Title>
                        </div>
                        <SearchTag isChooseCity={false} setTags={props.setTags} />
                    </div>
                    <SearchAside setTypes={props.setTypes} title="Шукаєш щось особливе?" list={list} />
                    <section className={s.main}>
                        <SearchMain numberColumn={4} items={goods} setActivePage={ (number) => { props.setActivePage(number, "goods") } } numberPage={props.numberPage} activePage={props.activePage} />
                    </section>
                </div>
            </Container>
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

export default Goods;