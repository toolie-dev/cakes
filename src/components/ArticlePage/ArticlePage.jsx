import Container from "../common/Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import Article from "./Article/Article";
import s from "./ArticlePage.module.css";

const ArticlePage = (props) => {
    return(
        <main>
            <div className={s.wrapper}>
                <Container>
                    <SearchForm placeholder="Як приготувати класичний чізкейк" isResult={false} setResult={(result) => console.log(result)} />
                </Container>
            </div>
            <Article />
        </main>
    )
}

export default ArticlePage;