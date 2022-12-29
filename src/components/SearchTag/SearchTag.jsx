import s from "./SearchTag.module.css";
import Btn from "../common/Btn/Btn"
import { ChooseCity } from "../common/Btn/Btns/Btns";
import { useState } from "react";

const SearchTag = ({isChooseCity = true, ...props}) => {
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

    return (
        <div className={s.wrap}>
            {
                isChooseCity &&
                <div className={s.chooseCity}>
                    <ChooseCity isTransparent={true} isAllWidth={true} text="Вся Україна" />
                </div>
            }
            <div className={s.tags}>
                <Btn onClick={ () => { onClick("cupcakes") } } isActive={tags.cupcakes} otherClass="tag" backgroundColor="pink">Капкейки</Btn>
                <Btn onClick={ () => { onClick("cakes") } } otherClass="tag" isActive={tags.cakes} backgroundColor="pink">Торти</Btn>
                <Btn onClick={ () => { onClick("cakePops") } } otherClass="tag" isActive={tags.cakePops} backgroundColor="pink">Кейк-попси</Btn>
                <Btn onClick={ () => { onClick("macaroons") } } otherClass="tag" isActive={tags.macaroons} backgroundColor="pink">Макаруни</Btn>
                <Btn onClick={ () => { onClick("cookies") } } otherClass="tag" isActive={tags.cookies} backgroundColor="pink">Печиво</Btn>
                <Btn onClick={ () => { onClick("sweets") } } otherClass="tag" isActive={tags.sweets} backgroundColor="pink">Цукерки</Btn>
            </div>
        </div> 
    )
}

export default SearchTag;
