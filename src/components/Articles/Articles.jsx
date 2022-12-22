import s from "./Articles.module.css";
import Container from "../common/Container/Container";
import { articles } from "./data.js";
import SearchForm from "../SearchForm/SearchForm";
import SearchAside from "../SearchAside/SearchAside";
import SearchMain from "../SearchMain/SearchMain";
import CardArticle from "../Cards/CardArticle/CardArticle";

const list =[
    {
        title: "Тематика",
        list: [
            {
                ua: "Рецепти",
                en: "recipes"
            },
            {
                ua: "Корисні поради на кухні",
                en: "usefulTipsInTheKitchen"
            },
            {
                ua: "Підбірки",
                en: "selections"
            },
            {
                ua: "Робота з клієнтами",
                en: "workWithCustomers"
            },
            {
                ua: "Цікаві історії",
                en: "interestingStories"
            }
        ]
    }
];

const Articles = (props) => {
    const items = articles.map((item, i) => <CardArticle key={i + 1} isNeedWrepper={false} isSearch={true} {...item}/>);
    return(
        <main>
            <section className={s.search}>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.header}>
                            <SearchForm placeholder="Як приготувати класичний чізкейк" setResult={props.setResult} deleteResult={props.deleteResult} result={props.result} />
                        </div> 
                        <SearchAside setTypes={props.setTypes} title="Цікаві та корисні статті" list={list} />
                        <SearchMain numberColumn={3} items={items} setActivePage={props.setActivePage} numberPage={props.numberPage} activePage={props.activePage} />
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default Articles;