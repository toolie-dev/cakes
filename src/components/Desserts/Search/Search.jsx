import Container from "../../common/Container/Container";
import Aside from "./Aside/Aside";
import s from "./Search.module.css";
import SearchForm from "./SearchForm/SearchForm";
import { products } from "../data.js";
import MainContainer from "./Main/MainContainer";
import Btn from "../../common/Btn/Btn";

const Search = (props) => {
    return(
        <section className={s.search}>
            <Container>
                <div className={s.wrapper}>
                    <SearchForm />
                    <div className={s.tags}>
                        <Btn otherClass="tag" backgroundColor="pink">Капкейки</Btn>
                        <Btn otherClass="tag" backgroundColor="pink">Торти</Btn>
                        <Btn otherClass="tag" backgroundColor="pink">Кейк-попси</Btn>
                        <Btn otherClass="tag" backgroundColor="pink">Макаруни</Btn>
                        <Btn otherClass="tag" backgroundColor="pink">Печиво</Btn>
                        <Btn otherClass="tag" backgroundColor="pink">Цукерки</Btn>
                    </div>
                    <Aside />
                    <MainContainer products={products} />
                </div>
            </Container>
        </section>
    )
}

export default Search