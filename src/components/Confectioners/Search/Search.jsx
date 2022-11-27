import s from "./Search.module.css";
import Container from "../../common/Container/Container";
import SearchForm from "../../SearchForm/SearchForm";
import Btn from "../../common/Btn/Btn";
import { useState } from "react";
import MainContainer from "./Main/MainContainer";
import { ChooseCity } from "../../common/Btn/Btns/Btns";

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
                    <SearchForm placeholder="Шоколадний торт з квітами" result={props.result} deleteResult={props.deleteResult} setResult={props.setResult} />
                    <div>
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
                    <MainContainer confectioners={props.confectioners} />
                </div>
            </Container>
        </section>
    )
}

export default Search;