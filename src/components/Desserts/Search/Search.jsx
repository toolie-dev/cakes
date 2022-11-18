import Container from "../../common/Container/Container";
import s from "./Search.module.css";
import { products } from "../data.js";
import MainContainer from "./Main/MainContainer";
import Btn from "../../common/Btn/Btn";
import { ChooseCity } from "../../common/Btn/Btns/Btns";
import AsideContainer from "./Aside/AsideContainer";
import { useState } from "react";
import SearchForm from "../../SearchForm/SearchForm";

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
        props.setTypes(tag);
    }

    return(
        <section className={s.search}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.header}>
                        <SearchForm />
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
                    <AsideContainer />
                    <MainContainer products={products} />
                </div>
            </Container>
        </section>
    )
}

export default Search