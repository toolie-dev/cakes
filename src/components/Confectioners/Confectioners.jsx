import SlickSlider from "../SlickSlider/SlickSlider";
import CardArticle from "../Cards/CardArticle/CardArticle";
import { listArticles, confectioners } from "./data";
import SearchContainer from "./Search/SearchContainer";

const Confectioners = (props) => {
    const articles = listArticles.map((item, i) => <CardArticle key={i + 1} {...item} />);
    return(
        <main>
            <SearchContainer confectioners={confectioners} />
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