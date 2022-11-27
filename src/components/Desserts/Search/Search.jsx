import Container from "../../common/Container/Container";
import s from "./Search.module.css";
import { products } from "../data.js";
import MainContainer from "./Main/MainContainer";
import Btn from "../../common/Btn/Btn";
import { ChooseCity } from "../../common/Btn/Btns/Btns";
import { useState } from "react";
import SearchForm from "../../SearchForm/SearchForm";
import SearchAside from "../../SearchAside/SearchAside";

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
    const [tags, setTags] = useState({
        cupcakes: false,
        cakes: false,
        cakePops: false,
        macaroons: false,
        cookies: false,
        sweets: false
    });

    const onClick = (tag) => {
        setTags({...tags, [tag]: !tags[tag]});
        props.setTags(tag);
    }

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
                        <div className={s.tags}>
                            <Btn onClick={ () => { onClick("cupcakes") } } isActive={tags.cupcakes} otherClass="tag" backgroundColor="pink">Капкейки</Btn>
                            <Btn onClick={ () => { onClick("cakes") } } otherClass="tag" isActive={tags.cakes} backgroundColor="pink">Торти</Btn>
                            <Btn onClick={ () => { onClick("cakePops") } } otherClass="tag" isActive={tags.cakePops} backgroundColor="pink">Кейк-попси</Btn>
                            <Btn onClick={ () => { onClick("macaroons") } } otherClass="tag" isActive={tags.macaroons} backgroundColor="pink">Макаруни</Btn>
                            <Btn onClick={ () => { onClick("cookies") } } otherClass="tag" isActive={tags.cookies} backgroundColor="pink">Печиво</Btn>
                            <Btn onClick={ () => { onClick("sweets") } } otherClass="tag" isActive={tags.sweets} backgroundColor="pink">Цукерки</Btn>
                        </div>
                    </div> 
                    <SearchAside setTypes={props.setTypes} title="Шукаєш щось особливе?" list={list} />
                    <MainContainer products={products} />
                </div>
            </Container>
        </section>
    )
}

export default Search