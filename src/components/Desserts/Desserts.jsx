import { listConfectioners, listArticles } from "./data.js";

import SlickSlider from "../SlickSlider/SlickSlider";
import CardConfectioner from "../Cards/CardConfectioner/CardConfectioner";
import CardArticle from "../Cards/CardArticle/CardArticle";
import SearchContainer from "./Search/SearchContainer.jsx";

const Desserts = (props) => {
    const confectioners = listConfectioners.map((item, i) => <CardConfectioner key={i + 1} {...item} />),
        articles = listArticles.map((item, i) => <CardArticle key={i + 1} {...item} />);
    return(
        <main>
            <SearchContainer />
            <SlickSlider settings={{
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            }} items={confectioners} title="Кращі кондитери" />
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

export default Desserts;