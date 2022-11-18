import s from "./Item.module.css";
import CardConfectioner from "../../../../Cards/CardConfectioner/CardConfectioner";
import SlickSlider from "../../../../SlickSlider/SlickSlider";
import CardProduct from "../../../../Cards/CardProduct/CardProduct";

const Item = (props) => {
    const products = props.products.map((item, i) => <CardProduct key={i + 1} isMini={true} {...item} />);
    return(
        <div className={s.item}>
            <CardConfectioner isMini={true} isNeedWrapper={false} img={props.img} name={props.name} reviews={props.reviews}
            desc={props.desc} tags={props.tags} />
            <SlickSlider className={s.wrapper} isMini={true} settings={{
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 762,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ],
                slidesToShow: 4
            }} items={products} title={props.name} />
        </div>
    )
}

export default Item;