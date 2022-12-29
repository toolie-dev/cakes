import Container from "../../common/Container/Container";
import s from "./Search.module.css";
import { products } from "../data.js";
import MainContainer from "./Main/MainContainer";
import Btn from "../../common/Btn/Btn";
import { ChooseCity } from "../../common/Btn/Btns/Btns";
import { useState } from "react";
import SearchForm from "../../SearchForm/SearchForm";
import SearchAside from "../../SearchAside/SearchAside";
import SearchTag from "../../SearchTag/SearchTag";

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

const Search = (props) => {
    return(
        <section className={s.search}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.header}>
                        <SearchForm placeholder="Шоколадний торт з квітами" setResult={props.setResult} deleteResult={props.deleteResult} result={props.result} />
                    </div>
                    <div className={s.wrap}>
                        <div className={s.chooseCity}>
                            <ChooseCity isTransparent={true} isAllWidth={true} text="Вся Україна" />
                        </div>
                        <SearchTag setTags={props.setTags} />
                    </div> 
                    <SearchAside setTypes={props.setTypes} title="Шукаєш щось особливе?" list={list} />
                    <MainContainer products={products} />
                </div>
            </Container>
        </section>
    )
}

export default Search