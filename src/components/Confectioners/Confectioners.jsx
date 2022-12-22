import s from "./Confectioners.module.css";
import SlickSlider from "../SlickSlider/SlickSlider";
import CardArticle from "../Cards/CardArticle/CardArticle";
import { listArticles, confectioners } from "./data";
import Container from "../common/Container/Container";
import SearchTag from "../SearchTag/SearchTag";
import SearchForm from "../SearchForm/SearchForm";
import MainContainer from "./Main/MainContainer";

const Confectioners = (props) => {
    const articles = listArticles.map((item, i) => <CardArticle key={i + 1} {...item} />);
    return(
        <main>
            <section className={s.search}>
                <Container>
                    <div className={s.wrapper}>
                        <SearchForm placeholder="Шоколадний торт з квітами" result={props.result} deleteResult={props.deleteResult} setResult={props.setResult} />
                        <SearchTag setTags={props.setTags} />
                        <MainContainer confectioners={confectioners} />
                    </div>
                </Container>
            </section>
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

export default Confectioners;